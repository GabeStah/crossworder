export function findClueListItemsByTitle(title: 'Across' | 'Down') {
  // Find all h3 elements within '.xwd__clue-list--wrapper' that match the title
  const matchingH3 = Array.from(
    document.querySelectorAll(
      'section.xwd__layout--cluelists > .xwd__clue-list--wrapper h3'
    )
  ).filter(h3 => h3.textContent.trim() === title);

  // Initialize an array to hold the li elements
  let liElements: HTMLElement[] = [];

  // If a matching h3 element is found, select the li elements within the same wrapper
  if (matchingH3.length > 0) {
    liElements = Array.from(
      matchingH3[0]
        .closest('.xwd__clue-list--wrapper')
        .querySelectorAll('ol.xwd__clue-list--list li')
    );
  }

  return liElements;
}
