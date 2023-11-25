import { Command } from './types';
import { RoverPositionVO } from './roverPositionVO';

export class Rover {
  private roverPosition: RoverPositionVO;

  private readonly maxX: number = 10;
  private readonly maxY: number = 10;

  private static readonly TURN_MAPPING = {
    R: { N: 'E', S: 'W', E: 'S', W: 'N' },
    L: { N: 'W', S: 'E', E: 'N', W: 'S' },
  };

  constructor(initialPosition: string) {
    this.roverPosition = RoverPositionVO.createFromString(initialPosition);
  }

  move() {
    const newPosition = this.calculateNewPosition();
    this.bound(newPosition);
    this.roverPosition = new RoverPositionVO(
      newPosition,
      this.roverPosition.orientation,
    );
  }

  private bound(newPosition: { x: number; y: number }) {
    if (newPosition.x >= this.maxX) {
      newPosition.x = 0;
    } else if (newPosition.x < 0) {
      newPosition.x = this.maxX;
    }

    if (newPosition.y >= this.maxY) {
      newPosition.y = 0;
    } else if (newPosition.y < 0) {
      newPosition.y = this.maxY;
    }
  }

  private calculateNewPosition(): { x: number; y: number } {
    const { x, y } = this.roverPosition.position;
    switch (this.roverPosition.orientation) {
      case 'N':
        return { x, y: y + 1 };
      case 'S':
        return { x, y: y - 1 };
      case 'E':
        return { x: x + 1, y };
      case 'W':
        return { x: x - 1, y };
      default:
        return { x, y };
    }
  }

  turn(direction: Command) {
    const newOrientation =
      Rover.TURN_MAPPING[direction][this.roverPosition.orientation];
    this.roverPosition = new RoverPositionVO(
      { x: this.roverPosition.position.x, y: this.roverPosition.position.y },
      newOrientation,
    );
  }

  getPosition() {
    return this.roverPosition.getStringified();
  }
}
