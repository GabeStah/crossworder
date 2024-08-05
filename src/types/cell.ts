export type Cell = {
  _type: 'cell';
  /**
   * Element of cell in complete grid.
   */
  elements?: {
    root: HTMLElement;
    data: SVGRectElement;
    number: HTMLElement;
    value: HTMLElement;
  };
  /**
   * Number of cell in complete grid
   */
  id: number;
  /**
   * Is the cell part of the editable grid.
   *
   * If `false`, the cell is @style black and cannot be edited by user.
   */
  isEditable?: boolean;
  /**
   * Is cell part of the current `isSelected` cell clue.
   *
   * @style Blue
   */
  isHighlighted?: boolean;
  /**
   * Is cell part of the current `isSelected` cell clue.
   *
   * @style Dim yellow
   */
  isRelated?: boolean;
  /**
   * Currently selected cell.
   *
   * @style Bright yellow
   */
  isSelected?: boolean;
  /**
   * Current entered value of cell.
   */
  value: string;
};
