import { Command, Orientation, RoverPosition } from './types';

export class Rover {
  private x: number;
  private y: number;
  private orientation: Orientation;

  private static readonly TURN_MAPPING = {
    R: { N: 'E', S: 'W', E: 'S', W: 'N' },
    L: { N: 'W', S: 'E', E: 'N', W: 'S' },
  };

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
    this.orientation = Rover.TURN_MAPPING[direction][this.orientation];
  }

  getPosition() {
    return `${this.x}:${this.y}:${this.orientation}`;
  }

  private parseRoverPosition(positionString: string): RoverPosition {
    const position = positionString.split(':');
    if (position.length !== 3 || !['N', 'S', 'E', 'W'].includes(position[2]))
      throw new Error('Invalid initial position');

    return {
      x: +position[0],
      y: +position[1],
      orientation: position[2] as Orientation,
    };
  }
}
