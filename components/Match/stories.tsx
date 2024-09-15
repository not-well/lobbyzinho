import { Meta, StoryObj } from '@storybook/react';
import Match, { MatchProps } from '.';

export default {
  title: 'Match',
  component: Match,
} as Meta;

export const Default: StoryObj = {
  args: {
    firstPlayer: {
      id: '1',
      name: 'Makoto',
    },
    secondPlayer: {
      id: '2',
      name: 'Akuma',
    },
  },
  argTypes: {
    firstPlayer: {
      table: {
        disable: true,
      },
    },
    secondPlayer: {
      table: {
        disable: true,
      },
    },
  },
};
