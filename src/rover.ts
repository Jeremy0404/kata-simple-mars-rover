type Orientation = 'N' | 'S' | 'E' | 'W';
interface RoverPosition {
  x: number;
  y: number;
  orientation: Orientation;
}
export type Turn = 'L' | 'R';
export type Command = 'M' | Turn;

export class Rover {
  private x: number;
  private y: number;
  private orientation: Orientation;

  constructor(initialPosition: string) {
    const parsedPosition = this.parseRoverPosition(initialPosition);
    this.x = parsedPosition.x;
    this.y = parsedPosition.y;
    this.orientation = parsedPosition.orientation;
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

  turn(direction: Command) {
    const directionResults = {
      R: {
        N: 'E',
        S: 'W',
        E: 'S',
        W: 'N',
      },
      L: {
        N: 'W',
        S: 'E',
        E: 'N',
        W: 'S',
      },
    };

    this.orientation = directionResults[direction][this.orientation];
  }

  getPosition() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }

  private parseRoverPosition(positionString: string): RoverPosition {
    const position = positionString.split(':');
    return {
      x: +position[0],
      y: +position[1],
      orientation: position[2] as Orientation,
    };
  }
}
