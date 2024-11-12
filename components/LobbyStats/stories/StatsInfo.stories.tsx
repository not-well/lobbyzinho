import { Meta, StoryObj } from '@storybook/react';
import { StatsInfo } from '..';

export default {
  title: 'Components/LobbyStats/StatsInfo',
  component: StatsInfo,
} as Meta;

export const Default: StoryObj = {
  args: {
    round: 5,
    lastWinner: 'The player',
    longestWinStreak: 3,
    longestWinStreakPlayer: ['The best best player'],
    biggestWinner: ['The best player'],
    biggestWinnerAmount: 3,
    biggestLooser: ['The worst player'],
    biggestLooserAmount: 2,
  },
  argTypes: {
    round: {
      control: {
        type: 'number',
        min: 0,
      },
      name: 'Round',
    },
    lastWinner: {
      control: 'text',
      name: 'Last winner',
    },
    longestWinStreak: {
      control: {
        type: 'number',
        min: 0,
      },
      name: 'Longest win streak',
    },
    longestWinStreakPlayer: {
      control: 'array',
      name: 'Longest win streak player(s)',
    },
    biggestWinner: {
      control: 'array',
      name: 'Biggest winner(s)',
    },
    biggestWinnerAmount: {
      control: {
        type: 'number',
        min: 0,
      },
      name: 'Biggest winner amount',
    },
    biggestLooser: {
      control: 'array',
      name: 'Biggest looser(s)',
    },
    biggestLooserAmount: {
      control: {
        type: 'number',
        min: 0,
      },
      name: 'Biggest looser amount',
    },
  },
};

export const TwoTiedPlayers: StoryObj = {
  args: {
    round: 5,
    lastWinner: 'The player',
    longestWinStreak: 3,
    longestWinStreakPlayer: ['The best best player', 'Dummy Player'],
    biggestWinner: ['The best player', 'Dummy Player'],
    biggestWinnerAmount: 3,
    biggestLooser: ['The worst player', 'Dummy Player'],
    biggestLooserAmount: 2,
  },
  argTypes: {
    round: {
      table: {
        disable: true,
      },
    },
    lastWinner: {
      table: {
        disable: true,
      },
    },
    longestWinStreak: {
      table: {
        disable: true,
      },
    },
    longestWinStreakPlayer: {
      table: {
        disable: true,
      },
    },
    biggestWinner: {
      table: {
        disable: true,
      },
    },
    biggestWinnerAmount: {
      table: {
        disable: true,
      },
    },
    biggestLooser: {
      table: {
        disable: true,
      },
    },
    biggestLooserAmount: {
      table: {
        disable: true,
      },
    },
  },
};

export const MoreThanTwoTiedPlayers: StoryObj = {
  args: {
    round: 5,
    lastWinner: 'The player',
    longestWinStreak: 3,
    longestWinStreakPlayer: [
      'The best best player',
      'Dummy Player',
      'Another Dummy Player',
    ],
    biggestWinner: ['The best player', 'Dummy Player', 'Another Dummy Player'],
    biggestWinnerAmount: 3,
    biggestLooser: ['The worst player', 'Dummy Player', 'Another Dummy Player'],
    biggestLooserAmount: 2,
  },
  argTypes: {
    round: {
      table: {
        disable: true,
      },
    },
    lastWinner: {
      table: {
        disable: true,
      },
    },
    longestWinStreak: {
      table: {
        disable: true,
      },
    },
    longestWinStreakPlayer: {
      table: {
        disable: true,
      },
    },
    biggestWinner: {
      table: {
        disable: true,
      },
    },
    biggestWinnerAmount: {
      table: {
        disable: true,
      },
    },
    biggestLooser: {
      table: {
        disable: true,
      },
    },
    biggestLooserAmount: {
      table: {
        disable: true,
      },
    },
  },
};
