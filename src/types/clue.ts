import type { Cell } from '@/types';

export type Clue = {
  _type: 'clue';
  /**
   * Array of cells that make up the clue.
   */
  cells?: Cell[];
  /**
   * Clue direction
   */
  direction: 'across' | 'down';
  /**
   * Combined `number` with shortened `direction` (e.g. 1A, 2D).
   */
  id: string;
  /**
   * Number of letters in the answer.
   */
  length?: number;
  /**
   * Clue number
   */
  number: number;
  /**
   * Clues that are related to the current clue.
   */
  relatedClues?: Clue[];
  /**
   * Clue text
   */
  text: string;
};
