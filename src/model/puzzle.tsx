import { findClueListItemsByTitle } from '@/lib/findClueListItemsByTitle';
import { hideElement, showElement } from '@/lib/utils';
import type { Board, Cell, Clue } from '@/types';
import type { Puzzle as PuzzleType } from '@/types/puzzle';
import cssText from 'data-text:@/style.css';

export const getStyle = () => {
  const style = document.createElement('style');
  style.textContent = cssText;
  return style;
};

export class Puzzle implements PuzzleType {
  _type: 'puzzle';
  board: Board;
  clues: Clue[];
  date: Date;
  dayOfWeek?:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
  elements?: {
    banner?: HTMLElement;
    board?: HTMLElement;
    clueBar?: HTMLElement;
    clueLists?: HTMLElement;
    root: HTMLElement;
  };
  title: string;
  url?: string;

  constructor() {
    this.fromDOM();
    console.log('puzzle created');
    console.log('hiding clue bar');
    this.hideBanner();
    // this.hideClueBar();
    // this.hideClueLists();
    // this.resizeBoard();
  }

  fromDOM() {
    console.log('fromDOM');
    this.elements = {} as { root: HTMLElement };
    this.elements.banner = this.getBanner();
    this.elements.root = this.getClueBarAndBoardElement();
    this.elements.board = this.getBoardElement();
    this.elements.clueBar = this.getClueBarElement();
    this.elements.clueLists = this.getClueListsElement();

    const headerElement = document.querySelector('#portal-game-header');

    this.title = headerElement?.querySelector(
      '.xwd__details--title'
    )?.textContent;

    const puzzleDate = new Date(
      Date.parse(
        headerElement?.querySelector('.xwd__details--date')?.textContent
      )
    );

    this.date = puzzleDate;

    // @ts-ignore
    this.dayOfWeek = puzzleDate
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase();

    this.url = window.location.href;

    const boardElement = this.getBoardElement();

    const cellElements = document.querySelectorAll(
      '#xwd-board g[data-group="cells"] g.xwd__cell'
    );
    const cells: Cell[] = [...cellElements].map(
      (element: HTMLElement, index) => {
        // Get the cell's `rect` element
        const dataElement = element.querySelector('rect');
        const numberElement = element.querySelector(
          'text[text-anchor="start"]'
        ) as HTMLElement;
        const valueElement = element.querySelector(
          'text[text-anchor="middle"]'
        ) as HTMLElement;

        const cell: Cell = {
          _type: 'cell',
          elements: {
            root: element,
            data: dataElement,
            number: numberElement,
            value: valueElement
          },
          // Parse the id from the cell's `id` attribute, in the form of "cell-id-0"
          id: parseInt(dataElement.id.split('-').pop()),
          isEditable: !dataElement.classList.contains('xwd__cell--block'),
          isHighlighted: dataElement.classList.contains(
            'xwd__cell--highlighted'
          ),
          isRelated: dataElement.classList.contains('xwd__cell--related'),
          isSelected: dataElement.classList.contains('xwd__cell--selected'),
          value: valueElement?.querySelector('text')?.textContent || ''
        };
        return cell;
      }
    );

    const gridElement = document.querySelector(
      '#xwd-board g[data-group="grid"]'
    ) as HTMLElement;

    this.board = {
      _type: 'board',
      cells: cells,
      elements: { root: boardElement },
      grid: {
        _type: 'grid',
        elements: {
          root: gridElement,
          border: gridElement?.querySelector('rect'),
          lines: gridElement?.querySelector('path')
        }
      }
    };

    this.clues = this.buildClues();

    // const downClues: Clue[] = Array.from(downClueElements, (element, index) => {
    //
    // puzzle.board = json.board;
    // puzzle.clues = json.clues;
    // puzzle.date = json.date;
    // puzzle.dayOfWeek = json.dayOfWeek;
    // puzzle.title = json.title;
    // puzzle.url = json.url;
    // return puzzle;
  }

  getBanner() {
    return document.querySelector('header.pz-header') as HTMLElement;
  }

  getBoardElement() {
    return document.querySelector(
      '#puzzle .xwd__layout_clueBarAndBoard .xwd__board'
    ) as HTMLElement;
  }

  getClueBarAndBoardElement() {
    return document.querySelector(
      '#puzzle .xwd__layout_clueBarAndBoard'
    ) as HTMLElement;
  }

  getClueBarElement() {
    return document.querySelector(
      '#puzzle .xwd__clue-bar-desktop--bar'
    ) as HTMLElement;
  }

  getClueListsElement() {
    return document.querySelector(
      '#puzzle .xwd__layout--cluelists'
    ) as HTMLElement;
  }

  getHeader() {
    return document.querySelector('header.pz-header') as HTMLElement;
  }

  hideBanner() {
    hideElement(this.elements.banner);
  }

  hideClueBar() {
    // const clueBar = document.querySelector(
    //   '#puzzle .xwd__clue-bar-desktop--bar'
    // );
    console.log('hiding clue bar');
    hideElement(this.elements.clueBar);
  }

  hideClueLists() {
    // const clueLists = document.querySelector('#puzzle .xwd__layout--cluelists');
    console.log('hiding clue lists');
    hideElement(this.elements.clueLists);
  }

  hideHeader() {
    const header = document.querySelector('header.pz-header');
    hideElement(header as HTMLElement);
  }

  showClueBar() {
    const clueBar = this.getClueBarElement();
    showElement(clueBar as HTMLElement);
  }

  showClueLists() {
    const clueLists = this.getClueListsElement();
    showElement(clueLists as HTMLElement);
  }

  showHeader() {
    const header = document.querySelector('header.pz-header');
    showElement(header as HTMLElement);
  }

  // resizeBoard() {
  //   // this.elements.board.style.scale = '1.8';
  //   const board = this.elements.root;
  //   // Calculate the viewport height
  //   const viewportHeight = window.innerHeight;
  //   console.log('viewportHeight', viewportHeight);
  //
  //   // Get the original height of the board
  //   const originalHeight = board.offsetHeight;
  //   console.log('originalHeight', originalHeight);
  //
  //   // Calculate the scale factor
  //   const scaleFactor = viewportHeight / originalHeight;
  //   console.log('scaleFactor', scaleFactor);
  //
  //   // Apply the scale factor
  //   board.style.transform = `scale(${scaleFactor})`;
  //   board.style.transformOrigin = 'top left';
  //
  //   // Set the board's position to be flush with the left side of the viewport
  //   board.style.position = 'absolute';
  //   board.style.top = '0';
  //   board.style.left = '0';
  // }

  buildClues() {
    const acrossClueElements = findClueListItemsByTitle('Across');
    const downClueElements = findClueListItemsByTitle('Down');

    const acrossClues: Clue[] = [...acrossClueElements].map(
      (element, index) => {
        const number = element.querySelector(
          'span.xwd__clue--label'
        ).textContent;
        const text = element.querySelector('span.xwd__clue--text').textContent;
        return {
          _type: 'clue',
          direction: 'across',
          id: `${number}A`,
          number: parseInt(number),
          text
        };
      }
    );

    const downClues: Clue[] = [...downClueElements].map((element, index) => {
      const number = element.querySelector('span.xwd__clue--label').textContent;
      const text = element.querySelector('span.xwd__clue--text').textContent;
      return {
        _type: 'clue',
        direction: 'down',
        id: `${number}D`,
        number: parseInt(number),
        text
      };
    });

    return [...acrossClues, ...downClues].sort((a, b) => a.number - b.number);
  }
}
