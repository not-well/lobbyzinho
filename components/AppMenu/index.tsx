import { ActionIcon, Flex } from '@mantine/core';
import { IconPlayerPause, IconPlayerPlay } from '@tabler/icons-react';
import PlayerFormModal from '../PlayerFormModal';
import LobbyStats from '../LobbyStats';
import { LobbyStatus } from '@/shared/types/LobbyStatus';
import { Stats } from '@/shared/types/Stats';

type AppMenuProps = {
  status: LobbyStatus;
  stats: Stats;
  onStart: () => void;
  onStop: () => void;
};

export default function AppMenu({
  status,
  stats,
  onStart,
  onStop,
}: AppMenuProps) {
  return (
    <Flex justify="flex-end" align="center" gap="md">
      <ActionIcon
        size="xl"
        color="teal"
        onClick={status === 'stopped' ? onStart : onStop}
        data-testid={status === 'stopped' ? 'start-icon' : 'stop-icon'}
      >
        {status === 'stopped' ? <IconPlayerPlay /> : <IconPlayerPause />}
      </ActionIcon>
      <PlayerFormModal />
      <LobbyStats lobbyStatus={status} stats={stats} />
    </Flex>
  );
}
