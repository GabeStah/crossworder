import type { Cell, Grid } from '@/types';

export type Board = {
  _type: 'board';
  cells: Cell[];
  grid: Grid;
  elements: {
    root: HTMLElement;
  };
};
