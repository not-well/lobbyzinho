import { Meta, StoryObj } from '@storybook/react';
import LobbyStats from '..';

export default {
  title: 'Components/LobbyStats/LobbyStats',
  component: LobbyStats,
} as Meta;

export const Default: StoryObj = {
  args: {
    stats: {
      round: 5,
      lastWinner: 'The player',
      longestWinStreak: 3,
      longestWinStreakPlayer: ['The best best player'],
      biggestWinner: ['The best player'],
      biggestWinnerAmount: 3,
      biggestLooser: ['The worst player'],
      biggestLooserAmount: 2,
    },
    lobbyStatus: 'started',
  },
  argTypes: {
    stats: {
      table: {
        disable: true,
      },
    },
    lobbyStatus: {
      name: 'Lobby status',
    },
  },
};
