import { Handler } from '../src/handler';
import { Rover } from '../src/rover';

const INITIAL_POSITION = '0:0:N';

describe('rover', () => {
  it("doesn't move", () => {
    verify('', INITIAL_POSITION);
  });

  it('moves once', () => {
    verify('M', '0:1:N');
  });

  it('moves multiple time', () => {
    verify('MM', '0:2:N');
  });

  it('turns left', () => {
    verify('L', '0:0:W');
  });

  it('turns right', () => {
    verify('R', '0:0:E');
  });

  it('turns and move', () => {
    verify('RM', '1:0:E');
  });

  it('turns and move multiple times', () => {
    verify('MMRMMLM', '2:3:N');
  });

  it('reaches top of the grid', () => {
    verify('MMMMMMMMMMM', '0:1:N');
  });

  it('reaches bottom of the grid', () => {
    verify('RRMM', '0:8:S');
  });

  it('reaches extreme right of the grid', () => {
    verify('RMMMMMMMMMMM', '1:0:E');
  });

  it('reaches extreme left of the grid', () => {
    verify('LMM', '8:0:W');
  });
});

function verify(command: string, expected: string) {
  const rover = new Rover(INITIAL_POSITION);
  const handler = new Handler(rover);
  expect(handler.execute(command)).toStrictEqual(expected);
}
