import { Meta, StoryObj } from '@storybook/react';
import Lobby from '.';
import { Queue } from '@/shared/classes/Queue';
import { Player } from '@/shared/types/Player';

export default {
  title: 'Lobby',
  component: Lobby,
} as Meta;

export const Default: StoryObj = {
  args: {
    status: 'started',
  },

  argTypes: {
    playersQueue: {
      table: {
        disable: true,
      },
    },
    status: {
      name: 'Status',
    },
  },

  render: (args) => {
    const playersQueue = [
      {
        id: '1',
        name: 'Gato',
      },
      {
        id: '2',
        name: 'Blue Mary',
      },
      {
        id: '3',
        name: 'Iori',
      },
      {
        id: '4',
        name: 'Kyo',
      },
    ];

    // @ts-ignore
    return <Lobby {...args} playersQueue={new Queue<Player>(playersQueue)} />;
  },
};
