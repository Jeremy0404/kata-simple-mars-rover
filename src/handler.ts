import { Command, Rover } from './rover';

export class Handler {
  constructor(private readonly rover: Rover) {}

  execute(commands: string): string {
    const parsedCommands = commands.split('') as Command[];
    parsedCommands.forEach((command) => {
      if (command === 'M') {
        this.rover.move();
        return;
      }
      this.rover.turn(command);
    });
    return this.rover.getPosition();
  }
}
