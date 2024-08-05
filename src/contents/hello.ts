import { DEFAULT_PLASMO_CONFIG } from '@/constants';
import type { PlasmoCSConfig } from 'plasmo';

export const config: PlasmoCSConfig = DEFAULT_PLASMO_CONFIG;

// window.addEventListener('DOMContentLoaded', () => {
//   console.log('DOM loaded');
// });

// // Select the node that will be observed for mutations
// const targetNode = document.getElementById('puzzle');
//
// // Options for the observer (which mutations to observe)
// const localConfig = { attributes: true, childList: true, subtree: true };
//
// // Callback function to execute when mutations are observed
// const callback = (mutationList, observer) => {
//   console.log('mutationList', mutationList);
//   for (const mutation of mutationList) {
//     if (mutation.type === 'childList') {
//       console.log('A child node has been added or removed.');
//     } else if (mutation.type === 'attributes') {
//       console.log(`The ${mutation.attributeName} attribute was modified.`);
//     }
//   }
// };
//
// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);
//
// // Start observing the target node for configured mutations
// observer.observe(targetNode, localConfig);

// Function to wait for the element to be available in the DOM
// function waitForElementToDisplay(selector: string, time: number) {
//   const intervalId = setInterval(function () {
//     const targetNode = document.getElementById(selector);
//     console.log('targetNode', targetNode);
//     if (targetNode !== null) {
//       clearInterval(intervalId);
//
//       // Once the element is available, observe it
//       const localConfig = { attributes: true, childList: true, subtree: true };
//       const callback = (mutationList, observer) => {
//         console.log('mutationList', mutationList);
//         for (const mutation of mutationList) {
//           if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//           } else if (mutation.type === 'attributes') {
//             console.log(
//               `The ${mutation.attributeName} attribute was modified.`
//             );
//           }
//         }
//       };
//       const observer = new MutationObserver(callback);
//       observer.observe(targetNode, localConfig);
//     }
//   }, time);
// }
//
// // Call the function with the ID of your element and check interval in milliseconds
// waitForElementToDisplay('puzzle', 3000);

// Later, you can stop observing
// observer.disconnect();
