import { render, screen, userEvent } from '../../test-utils';

import FightingPlayer from '.';
import { Player } from '@/shared/types/Player';

describe('<FightingPlayer />', () => {
  const dummyPlayer: Player = {
    id: '1',
    name: 'Dummy',
  };

  it("should render player's name", () => {
    render(
      <FightingPlayer
        player={dummyPlayer}
        playerPosition="first"
        handleDelete={() => {}}
        handleCheck={() => {}}
      />
    );

    expect(screen.getByText(dummyPlayer.name)).toBeInTheDocument();
  });

  it('should render trash icon first', () => {
    render(
      <FightingPlayer
        player={dummyPlayer}
        playerPosition="first"
        handleDelete={() => {}}
        handleCheck={() => {}}
      />
    );

    expect(screen.getAllByRole('button')[0]).toHaveAttribute(
      'data-testid',
      'delete'
    );
  });

  it('should render check icon first', () => {
    render(
      <FightingPlayer
        player={dummyPlayer}
        playerPosition="second"
        handleDelete={() => {}}
        handleCheck={() => {}}
      />
    );

    expect(screen.getAllByRole('button')[0]).toHaveAttribute(
      'data-testid',
      'check'
    );
  });

  it('should execute delete function', async () => {
    const user = userEvent.setup();
    const handleClickDelete = jest.fn();

    render(
      <FightingPlayer
        player={dummyPlayer}
        playerPosition="second"
        handleDelete={handleClickDelete}
        handleCheck={() => {}}
      />
    );

    await user.click(screen.getByTestId('delete'));
    expect(handleClickDelete).toHaveBeenCalledTimes(1);
  });

  it('should execute check function', async () => {
    const user = userEvent.setup();
    const handleClickCheck = jest.fn();

    render(
      <FightingPlayer
        player={dummyPlayer}
        playerPosition="second"
        handleDelete={() => {}}
        handleCheck={handleClickCheck}
      />
    );

    await user.click(screen.getByTestId('check'));
    expect(handleClickCheck).toHaveBeenCalledTimes(1);
  });
});
