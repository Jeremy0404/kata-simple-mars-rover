import { Orientation } from './types';

export class RoverPositionVO {
  constructor(
    readonly position: { x: number; y: number },
    readonly orientation: Orientation,
  ) {}

  static createFromString(positionString: string) {
    const position = positionString.split(':');
    if (position.length !== 3 || !(position[2] in Orientation))
      throw new Error('Invalid position');

    return new RoverPositionVO(
      {
        x: +position[0],
        y: +position[1],
      },
      position[2] as Orientation,
    );
  }

  getStringified() {
    return `${this.position.x}:${this.position.y}:${this.orientation}`;
  }
}
