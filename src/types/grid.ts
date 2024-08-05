export type Grid = {
  _type: 'grid';
  elements?: {
    root: HTMLElement;
    border: SVGRectElement;
    lines: SVGPathElement;
  };
};
