import { Rover } from './rover';

export class Handler {
  constructor(private readonly rover: Rover) {}

  execute(command: string): string {
    const movements = command.split('');
    movements.forEach(() => this.rover.move());
    return this.rover.getPosition();
  }
}
