import { Handler } from '../src/handler';
import { Rover } from '../src/rover';

const INITIAL_POSITION = '0:0:N';

describe('rover', () => {
  it("doesn't move", () => {
    verify('', INITIAL_POSITION);
  });
});

function verify(command: string, expected: string) {
  const handler = new Handler(new Rover(INITIAL_POSITION));
  expect(handler.execute(command)).toStrictEqual(expected);
}
