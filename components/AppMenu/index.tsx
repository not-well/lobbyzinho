import { ActionIcon, Flex } from '@mantine/core';
import { IconInfoCircle, IconPlayerPlay, IconPlus } from '@tabler/icons-react';

export default function AppMenu() {
  return (
    <Flex justify="flex-end" align="center" gap="md">
      <ActionIcon size="xl" color="teal">
        <IconPlayerPlay />
      </ActionIcon>
      <ActionIcon size="xl" variant="default">
        <IconPlus />
      </ActionIcon>
      <ActionIcon size="xl" variant="default">
        <IconInfoCircle />
      </ActionIcon>
    </Flex>
  );
}
