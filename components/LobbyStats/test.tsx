import {
  getDefaultNormalizer,
  render,
  screen,
  userEvent,
  waitFor,
} from '@/test-utils';

import LobbyStats, { normalizePlayersNames, StatsInfo } from '.';
import { Stats } from '@/shared/types/Stats';

const defaultLobbyStats: Stats = {
  round: 5,
  lastWinner: 'The player',
  longestWinStreak: 3,
  longestWinStreakPlayer: ['The best best player'],
  biggestWinner: ['The best player'],
  biggestWinnerAmount: 3,
  biggestLooser: ['The worst player'],
  biggestLooserAmount: 2,
};

describe('<LobbyStats />', () => {
  it('should render the drawer closed by default', () => {
    render(<LobbyStats lobbyStatus="stopped" stats={defaultLobbyStats} />);

    expect(screen.queryByText(/Lobby stats/i)).not.toBeInTheDocument();
  });

  it('should render the drawer when the button is clicked', async () => {
    const user = userEvent.setup();

    render(<LobbyStats lobbyStatus="stopped" stats={defaultLobbyStats} />);

    await user.click(screen.getByTestId('lobby-stats-button'));
    await waitFor(() => {
      expect(screen.queryByText(/Lobby stats/i)).toBeInTheDocument();
    });
  });

  it('should hide the drawer when the close button is clicked', async () => {
    const user = userEvent.setup();

    render(<LobbyStats lobbyStatus="stopped" stats={defaultLobbyStats} />);

    await user.click(screen.getByTestId('lobby-stats-button'));
    await waitFor(() => {
      expect(screen.queryByText(/Lobby stats/i)).toBeInTheDocument();
    });
    await user.click(screen.getByTestId('close-button'));
    await waitFor(() => {
      expect(screen.queryByText(/Lobby stats/i)).not.toBeInTheDocument();
    });
  });

  it('should show the stats info', () => {
    render(
      <StatsInfo
        round={defaultLobbyStats.round}
        lastWinner={defaultLobbyStats.lastWinner}
        longestWinStreak={defaultLobbyStats.longestWinStreak}
        longestWinStreakPlayer={defaultLobbyStats.longestWinStreakPlayer}
        biggestWinner={defaultLobbyStats.biggestWinner}
        biggestWinnerAmount={defaultLobbyStats.biggestWinnerAmount}
        biggestLooser={defaultLobbyStats.biggestLooser}
        biggestLooserAmount={defaultLobbyStats.biggestLooserAmount}
      />
    );

    expect(screen.getByTestId('round-count')).toHaveTextContent(
      `Round: ${defaultLobbyStats.round}`
    );
    expect(screen.getByTestId('last-winner')).toHaveTextContent(
      `Last winner: ${defaultLobbyStats.lastWinner}`
    );
    expect(screen.getByTestId('longest-win-streak')).toHaveTextContent(
      `Longest win streak: ${defaultLobbyStats.longestWinStreak} (${defaultLobbyStats.longestWinStreakPlayer})`
    );
    expect(screen.getByTestId('biggest-winner')).toHaveTextContent(
      `Biggest winner: ${defaultLobbyStats.biggestWinner} (${defaultLobbyStats.biggestWinnerAmount} wins)`
    );
    expect(screen.getByTestId('biggest-looser')).toHaveTextContent(
      `Biggest looser: ${defaultLobbyStats.biggestLooser} (${defaultLobbyStats.biggestLooserAmount} defeats)`
    );
  });

  it('should show the stats info on plural separated by "&" when there are two tied players', () => {
    const players = defaultLobbyStats.biggestWinner.concat(['Dummy Player']);

    render(
      <StatsInfo
        round={defaultLobbyStats.round}
        lastWinner={defaultLobbyStats.lastWinner}
        longestWinStreak={defaultLobbyStats.longestWinStreak}
        longestWinStreakPlayer={players}
        biggestWinner={players}
        biggestWinnerAmount={defaultLobbyStats.biggestWinnerAmount}
        biggestLooser={players}
        biggestLooserAmount={defaultLobbyStats.biggestLooserAmount}
      />
    );

    expect(screen.getByTestId('longest-win-streak')).toHaveTextContent(
      `Longest win streak: ${defaultLobbyStats.longestWinStreak} (${normalizePlayersNames(players)})`
    );
    expect(screen.getByTestId('biggest-winner')).toHaveTextContent(
      `Biggest winners: ${normalizePlayersNames(players)} (${defaultLobbyStats.biggestWinnerAmount} wins)`
    );
    expect(screen.getByTestId('biggest-looser')).toHaveTextContent(
      `Biggest loosers: ${normalizePlayersNames(players)} (${defaultLobbyStats.biggestLooserAmount} defeats)`
    );
  });

  it('should show the stats info on plural separated by ", " when there are more than two tied players', () => {
    const players = defaultLobbyStats.biggestWinner.concat([
      'Dummy Player',
      'Another Dummy Player',
    ]);

    render(
      <StatsInfo
        round={defaultLobbyStats.round}
        lastWinner={defaultLobbyStats.lastWinner}
        longestWinStreak={defaultLobbyStats.longestWinStreak}
        longestWinStreakPlayer={players}
        biggestWinner={players}
        biggestWinnerAmount={defaultLobbyStats.biggestWinnerAmount}
        biggestLooser={players}
        biggestLooserAmount={defaultLobbyStats.biggestLooserAmount}
      />
    );

    expect(screen.getByTestId('longest-win-streak')).toHaveTextContent(
      `Longest win streak: ${defaultLobbyStats.longestWinStreak} (${normalizePlayersNames(players)})`
    );
    expect(screen.getByTestId('biggest-winner')).toHaveTextContent(
      `Biggest winners: ${normalizePlayersNames(players)} (${defaultLobbyStats.biggestWinnerAmount} wins)`
    );
    expect(screen.getByTestId('biggest-looser')).toHaveTextContent(
      `Biggest loosers: ${normalizePlayersNames(players)} (${defaultLobbyStats.biggestLooserAmount} defeats)`
    );
  });

  it('should return an empty string', () => {
    const emptyPlayersArray: string[] = [];
    const result = normalizePlayersNames(emptyPlayersArray);

    expect(result).toHaveLength(0);
  });
});
