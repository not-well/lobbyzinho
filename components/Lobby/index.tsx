import Match from '../Match';

import { Player } from '@/shared/types/Player';
import { Queue } from '@/shared/classes/Queue';
import { Container, Table, Text } from '@mantine/core';

type LobbyProps = {
  status: 'started' | 'stopped';
  playersQueue: Queue<Player>;
};

export default function Lobby(props: LobbyProps) {
  let firstPlayer;
  let secondPlayer;

  if (props.status === 'started') {
    firstPlayer = props.playersQueue.dequeue();
    secondPlayer = props.playersQueue.dequeue();
  }

  const waitingPlayers: Player[] = props.playersQueue.toArray();

  return (
    <Container>
      {props.status === 'started' && firstPlayer && secondPlayer && (
        <Match firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
      )}

      <Table>
        <Table.Tbody>
          {waitingPlayers.map((player: Player) => (
            <Table.Tr key={player.id}>
              <Table.Td>
                <Text ta="left" fw="bold">
                  {player.name}
                </Text>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Container>
  );
}
