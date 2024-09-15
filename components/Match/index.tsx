import { Group, Space, Text } from '@mantine/core';

import './styles.css';

import { Player } from '@/shared/types/Player';
import FightingPlayer from '../FightingPlayer';

export type MatchProps = {
  firstPlayer: Player;
  secondPlayer: Player;
};

export default function Match(props: MatchProps) {
  return (
    <Group justify="center" gap="xs">
      <FightingPlayer player={props.firstPlayer} playerPosition="first" />
      <Space w="xl" />
      <Text ta="center" fw="bold">
        VS
      </Text>
      <Space w="xl" />
      <FightingPlayer player={props.secondPlayer} playerPosition="second" />
    </Group>
  );
}
