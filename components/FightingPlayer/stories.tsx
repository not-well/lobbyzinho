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
};
