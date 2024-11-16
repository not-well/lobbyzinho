import { Meta, StoryObj } from '@storybook/react';
import AppMenu from '.';

export default {
  title: 'AppMenu',
  component: AppMenu,
} as Meta;

export const Default: StoryObj = {
  args: {
    status: 'stopped',
  },
  argTypes: {
    status: {
      name: 'Lobby status',
    },
    onStart: {
      table: {
        disable: true,
      },
    },
    onStop: {
      table: {
        disable: true,
      },
    },
    stats: {
      table: {
        disable: true,
      },
    },
  },
};
