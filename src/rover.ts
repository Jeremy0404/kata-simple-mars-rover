type Orientation = 'N' | 'S' | 'E' | 'O';
export class Rover {
  x: number;
  y: number;
  orientation: Orientation;

  constructor(initialPosition: string) {
    const parsedPosition = initialPosition.split(':');
    this.x = +parsedPosition[0];
    this.y = +parsedPosition[1];
    this.orientation = parsedPosition[2] as Orientation;
  }

  move() {}

  getPosition() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }
}
