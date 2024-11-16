import { render, screen } from '@/test-utils';

import AppMenu from '.';
import { Stats } from '@/shared/types/Stats';

describe('<AppMenu />', () => {
  const stats: Stats = {
    round: 0,
    lastWinner: '',
    longestWinStreak: 0,
    longestWinStreakPlayer: [],
    biggestWinner: [],
    biggestWinnerAmount: 0,
    biggestLooser: [],
    biggestLooserAmount: 0,
  };

  it('should render start (play) icon', () => {
    render(
      <AppMenu
        status="stopped"
        stats={stats}
        onStart={() => {}}
        onStop={() => {}}
      />
    );

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('should render stop (pause) icon', () => {
    render(
      <AppMenu
        status="started"
        stats={stats}
        onStart={() => {}}
        onStop={() => {}}
      />
    );

    expect(screen.getByTestId('stop-icon')).toBeInTheDocument();
  });
});
