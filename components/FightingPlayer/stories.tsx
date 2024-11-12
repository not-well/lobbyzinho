import { Meta, StoryObj } from '@storybook/react';
import FightingPlayer from '.';

export default {
  title: 'FightingPlayer',
  component: FightingPlayer,
} as Meta;

export const Default: StoryObj = {
  args: {
    player: {
      id: '1',
      name: 'Gato',
    },
    playerPosition: 'first',
  },
  argTypes: {
    player: {
      table: {
        disable: true,
      },
    },
    playerPosition: {
      name: 'Player position',
    },
    handleDelete: {
      table: {
        disable: true,
      },
    },
    handleCheck: {
      table: {
        disable: true,
      },
    },
  },
};
