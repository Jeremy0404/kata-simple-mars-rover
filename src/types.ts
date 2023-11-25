export type Orientation = 'N' | 'S' | 'E' | 'W';
export interface RoverPosition {
  x: number;
  y: number;
  orientation: Orientation;
}
export type Turn = 'L' | 'R';
export type Command = 'M' | Turn;
