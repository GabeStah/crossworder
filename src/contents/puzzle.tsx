import { SwitchForm } from '@/components/switch-form';
import { Puzzle } from '@/model/puzzle';
import cssText from 'data-text:@/style.css';
import type { PlasmoCSConfig, PlasmoGetStyle } from 'plasmo';
import { useEffect, useReducer, useRef } from 'react';

// export const getStyle: PlasmoGetStyle = () => {
//   const style = document.createElement("style")
//   style.textContent = `
//     p {
//       background-color: yellow;
//     }
//   `
//   return style
// };

// TODO: Try API endpoint after loading?
// https://www.nytimes.com/svc/crosswords/v6/puzzle/daily/2024-04-23.json

// TODO: Use WCASG Widget: Plugin system for DOM manipulation?
// https://github.com/GabeStah/wcasg-widget?tab=readme-ov-file#pluginaction

export const config: PlasmoCSConfig = {
  all_frames: true,
  matches: ['https://www.nytimes.com/crosswords/game/*'],
  world: 'MAIN'
};

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

const CustomPuzzleComponent = () => {
  const boardWrapperRef = useRef<HTMLDivElement>(null);

  function waitForElementToDisplay(selector: string, time: number) {
    const intervalId = setInterval(function () {
      const targetNode = document.getElementById(selector);
      console.log('targetNode', targetNode);
      if (targetNode !== null) {
        clearInterval(intervalId);

        // Once the element is available, observe it
        const localConfig = {
          attributes: true,
          childList: true,
          subtree: true
        };
        const callback = (mutationList, observer) => {
          console.log('mutationList', mutationList);
          for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
              console.log('A child node has been added or removed.');
            } else if (mutation.type === 'attributes') {
              console.log(
                `The ${mutation.attributeName} attribute was modified.`
              );
            }
          }
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, localConfig);
      }
    }, time);
  }

  // Call the function with the ID of your element and check interval in milliseconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const adjustBoardSize = (board: HTMLElement) => {
      const resizeHandler = () => {
        const viewportHeight = window.innerHeight;
        const originalHeight = board.offsetHeight;
        const scaleFactor = viewportHeight / originalHeight;

        board.style.transform = `scale(${scaleFactor})`;
        board.style.transformOrigin = 'top left';
        board.style.position = 'absolute';
        board.style.top = '0';
        board.style.left = '0';
      };

      resizeHandler();
      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    };

    function adjustStylesheetRule(selector, newStyles) {
      for (const sheet of document.styleSheets) {
        if (sheet.cssRules) {
          for (const rule of sheet.cssRules) {
            if (rule.selectorText === selector) {
              for (const [property, value] of Object.entries(newStyles)) {
                rule.style[property] = value;
              }
              return;
            }
          }
        }
      }
    }

    // Function to check for the element and execute your effect
    const checkAndExecute = () => {
      const targetNode = document.getElementById('puzzle');
      if (targetNode !== null) {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        executeEffect(targetNode); // Call the function to execute your effect
      }
    };

    // Execute the effect or logic you want to perform on the element
    const executeEffect = (element: HTMLElement) => {
      // Fetch puzzle data
      const currentDate = new Date().toISOString().split('T')[0];
      const apiURL = `https://www.nytimes.com/svc/crosswords/v6/puzzle/daily/${currentDate}.json`;

      // Fetch API
      fetch(apiURL)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // Change the fill color dynamically
      // adjustStylesheetRule('.xwd__cell--selected', { fill: '#0000FF' }); // Example: Change to blue
      // adjustStylesheetRule('.xwd__cell--highlighted', { fill: '#ff0073' }); // Example: Change to magenta

      adjustStylesheetRule('.xwd__clue-bar-desktop--text', {
        fontWeight: 'bold',
        fontSize: '1.5em'
      });
      adjustStylesheetRule('.xwd__clue-bar-desktop--number', {
        fontSize: '1.3em'
      });

      // TODO: Add more logic here
      console.log('Element is loaded or five seconds have passed:', element);
      const puzzle = new Puzzle();
      // const board = puzzle.elements.root;

      // const cleanup = adjustBoardSize(board);
      //
      // // Cleanup event listener on component unmount
      // return cleanup;

      // Select the necessary elements
      const layoutContainer = document.querySelector('.pz-game-field');
      const mainContainer = document.querySelector('.pz-game-field main');
      const clueBarAndBoard = puzzle.elements.root;
      const board = puzzle.elements.board;
      const clueBar = puzzle.elements.clueBar;
      const clueLists = puzzle.elements.clueLists;
      const puzzleElement = document.getElementById('puzzle');

      puzzleElement.style.maxWidth = '100%';
      puzzleElement.style.maxHeight = 'none';
      puzzleElement.style.padding = '0';

      clueLists.insertBefore(clueBar, clueLists.firstChild);

      const clueListContainer = document.createElement('div');
      clueListContainer.classList.add('xwd__clue-list-container');
      clueListContainer.style.flexGrow = '1';
      clueListContainer.style.display = 'flex';
      clueListContainer.style.flexDirection = 'column';
      clueListContainer.style.overflowY = 'auto';
      clueListContainer.style.height = '100%';
      clueListContainer.style.width = '100%';

      // Move the clue-list wrappers into the new container
      const clueListWrappers = document.querySelectorAll(
        '.xwd__clue-list--wrapper'
      );
      clueListWrappers.forEach(wrapper => {
        clueListContainer.appendChild(wrapper);
      });

      // Append the new container to the clue lists section
      clueLists.appendChild(clueListContainer);

      const clueListWrapperDivs = document.querySelectorAll(
        '.xwd__clue-list--wrapper'
      );
      clueListWrapperDivs.forEach(wrapper => {
        wrapper.style.flexGrow = '1';
        wrapper.style.overflowY = 'auto';
        wrapper.style.width = '100%';
      });

      // Function to adjust the layout on window resize
      function adjustLayout() {
        const viewportHeight = window.innerHeight;

        // Apply initial styles
        layoutContainer.style.display = 'flex';
        layoutContainer.style.height = '100vh !important';
        layoutContainer.style.margin = '0';
        layoutContainer.style.justifyContent = 'center';
        layoutContainer.style.alignItems = 'center';

        mainContainer.style.height = '100%';

        clueBarAndBoard.style.display = 'flex';
        clueBarAndBoard.style.flexDirection = 'column';
        clueBarAndBoard.style.width = 'auto';
        clueBarAndBoard.style.height = '100vh';

        board.style.flexGrow = '1';
        board.style.position = 'relative';
        board.style.width = 'max-content';
        board.style.height = '100vh';
        board.style.overflow = '';

        clueBar.style.width = '100%';
        clueBar.style.marginBottom = '1em';

        clueLists.style.display = 'flex';
        clueLists.style.flexDirection = '';
        clueLists.style.width = '400px';
        clueLists.style.maxWidth = '400px';
        clueLists.style.height = '100%';
        // clueLists.style.overflowY = 'auto';

        const clueBarHeight = clueBar.offsetHeight;
        const remainingHeight = viewportHeight - clueBarHeight;
      }

      // Initial adjustment
      adjustLayout();

      // Adjust layout on window resize
      // window.addEventListener('resize', adjustLayout);
    };

    // Set up interval to check for element availability
    intervalId = setInterval(checkAndExecute, 100); // Check every 100ms

    // Set up a five second timeout to ensure execution
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      const targetNode = document.getElementById('puzzle');
      executeEffect(targetNode); // Ensure effect runs even if element is null
    }, 5000);

    waitForElementToDisplay('puzzle', 3000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []); // Empty array means this effect runs only once after initial render

  return (
    <>
      {/*<div className=''>*/}
      {/*  <span>Custom Puzzle Component</span>*/}
      {/*  <div id='custom-board-wrapper' ref={boardWrapperRef}></div>*/}
      {/*</div>*/}
    </>
  );
};

export default CustomPuzzleComponent;
