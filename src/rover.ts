type Orientation = 'N' | 'S' | 'E' | 'W';
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

  move() {
    switch (this.orientation) {
      case 'N':
        this.y++;
        break;
      case 'S':
        this.y--;
        break;
      case 'E':
        this.x++;
        break;
      case 'W':
        this.x--;
        break;
    }
  }

  getPosition() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }
}
