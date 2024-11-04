import { ActionIcon, Flex } from '@mantine/core';
import { IconInfoCircle, IconPlayerPlay } from '@tabler/icons-react';
import PlayerFormModal from '../PlayerFormModal';

export default function AppMenu() {
  return (
    <Flex justify="flex-end" align="center" gap="md">
      <ActionIcon size="xl" color="teal">
        <IconPlayerPlay />
      </ActionIcon>
      <PlayerFormModal />
      <ActionIcon size="xl" variant="default">
        <IconInfoCircle />
      </ActionIcon>
    </Flex>
  );
}
