import { Group, Space, Text } from '@mantine/core';

import { Player } from '@/shared/types/Player';
import FightingPlayer from '../FightingPlayer';

export type MatchProps = {
  firstPlayer: Player;
  secondPlayer: Player;
};

export default function Match(props: MatchProps) {
  return (
    <Group justify="space-between" gap="xl" mb="xl" grow>
      <FightingPlayer player={props.firstPlayer} playerPosition="first" />
      <Text ta="center" fw="bold" size="xl">
        VS
      </Text>
      <FightingPlayer player={props.secondPlayer} playerPosition="second" />
    </Group>
  );
}
