export enum Orientation {
  N = 'N',
  S = 'S',
  E = 'E',
  W = 'W',
}
export interface RoverPosition {
  x: number;
  y: number;
  orientation: Orientation;
}
export type Turn = 'L' | 'R';
export type Command = 'M' | Turn;
