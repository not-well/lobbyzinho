import Match from '../Match';

import { Player } from '@/shared/types/Player';
import { Queue } from '@/shared/classes/Queue';
import { Table } from '@mantine/core';

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
    <>
      {props.status === 'started' && firstPlayer && secondPlayer && (
        <Match firstPlayer={firstPlayer} secondPlayer={secondPlayer} />
      )}

      <Table>
        <Table.Tbody>
          {waitingPlayers.map((player: Player) => (
            <Table.Tr key={player.id} data-testid="zzzz">
              <Table.Td>{player.name}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </>
  );
}
