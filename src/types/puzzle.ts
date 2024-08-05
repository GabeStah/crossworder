import type { Board, Clue } from '@/types';

export type Puzzle = {
  _type: 'puzzle';
  board: Board;
  clues: Clue[];
  date?: Date;
  dayOfWeek?:
    | 'monday'
    | 'tuesday'
    | 'wednesday'
    | 'thursday'
    | 'friday'
    | 'saturday'
    | 'sunday';
  elements?: {
    root: HTMLElement;
  };
  title?: string;
  url?: string;
};
