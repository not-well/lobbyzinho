import { AppShell, Flex, Group, Text } from '@mantine/core';
import Lobby from '../Lobby';
import { useState } from 'react';
import { Queue } from '@/shared/classes/Queue';
import { Player } from '@/shared/types/Player';
import AppMenu from '../AppMenu';

export default function Application() {
  const [queue, setQueue] = useState<Queue<Player>>(new Queue<Player>([]));

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Group gap={'xs'} justify="space-between" h="100%" px="md" grow>
          <Text>Lobbyzinho</Text>
          <AppMenu />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Lobby status="stopped" playersQueue={queue}></Lobby>
      </AppShell.Main>
    </AppShell>
  );
}
