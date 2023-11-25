import { Rover } from './rover';

export class Handler {
  constructor(private readonly rover: Rover) {}

  execute(command: string): string {
    return this.rover.getPosition();
  }
}
