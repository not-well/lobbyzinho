import { render, screen } from '@/test-utils';

import Lobby from '.';
import { Player } from '@/shared/types/Player';
import { Queue } from '@/shared/classes/Queue';

describe('<Lobby />', () => {
  let dummyPlayersQueue: Queue<Player>;

  beforeEach(() => {
    const players: Player[] = [
      {
        id: '1',
        name: 'Dummy_1',
      },
      {
        id: '2',
        name: 'Dummy_2',
      },
      {
        id: '3',
        name: 'Dummy_3',
      },
      {
        id: '4',
        name: 'Dummy_4',
      },
    ];

    dummyPlayersQueue = new Queue<Player>(players);
  });

  it('should not show players fighting when the lobby is not started', () => {
    render(<Lobby status="stopped" playersQueue={dummyPlayersQueue} />);

    expect(screen.queryByText('VS')).not.toBeInTheDocument();
  });

  it('should show players fighting when the lobby is started', () => {
    render(<Lobby status="started" playersQueue={dummyPlayersQueue} />);

    expect(screen.queryByText('VS')).toBeInTheDocument();
  });

  it('all players should be waiting when not started', () => {
    render(<Lobby status="stopped" playersQueue={dummyPlayersQueue} />);

    expect(screen.queryAllByRole('row').length).toBe(4);
  });

  it('two players should be waiting when not started', () => {
    render(<Lobby status="started" playersQueue={dummyPlayersQueue} />);

    expect(screen.queryAllByRole('row').length).toBe(2);
  });
});
