import { ActionIcon, Group, Paper, Text } from '@mantine/core';
import { IconTrash, IconCheck } from '@tabler/icons-react';

import { Player } from '@/shared/types/Player';

type FightingPlayerProps = {
  player: Player;
  playerPosition: 'first' | 'second';
  handleDelete: () => void;
  handleCheck: () => void;
};

export default function FightingPlayer(props: FightingPlayerProps) {
  return (
    <Paper
      shadow="xs"
      radius="xl"
      withBorder
      p="xl"
      data-testid="fighting-player"
    >
      <Text ta="center" fw="bold" truncate="end" mb="lg">
        {props.player.name}
      </Text>
      <Group justify="space-between">
        <ActionIcon
          variant="light"
          color={props.playerPosition === 'first' ? 'red' : 'teal'}
          size="xl"
          radius="xl"
          data-testid={props.playerPosition === 'first' ? 'delete' : 'check'}
          onClick={
            props.playerPosition === 'first'
              ? props.handleDelete
              : props.handleCheck
          }
        >
          {props.playerPosition === 'first' ? <IconTrash /> : <IconCheck />}
        </ActionIcon>
        <ActionIcon
          variant="light"
          color={props.playerPosition === 'first' ? 'teal' : 'red'}
          size="xl"
          radius="xl"
          data-testid={props.playerPosition === 'first' ? 'check' : 'delete'}
          onClick={
            props.playerPosition === 'first'
              ? props.handleCheck
              : props.handleDelete
          }
        >
          {props.playerPosition === 'first' ? <IconCheck /> : <IconTrash />}
        </ActionIcon>
      </Group>
    </Paper>
  );
}
