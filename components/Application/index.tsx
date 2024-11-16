import { AppShell, Group, Text } from '@mantine/core';
import Lobby from '../Lobby';
import { useState } from 'react';
import { Queue } from '@/shared/classes/Queue';
import { Player } from '@/shared/types/Player';
import AppMenu from '../AppMenu';
import { LobbyStatus } from '@/shared/types/LobbyStatus';
import { Stats } from '@/shared/types/Stats';

export default function Application() {
  const [queue, setQueue] = useState<Queue<Player>>(new Queue<Player>([]));
  const [status, setStatus] = useState<LobbyStatus>('stopped');
  const [stats, setStats] = useState<Stats>({
    round: 0,
    lastWinner: '',
    longestWinStreak: 0,
    longestWinStreakPlayer: [],
    biggestWinner: [],
    biggestWinnerAmount: 0,
    biggestLooser: [],
    biggestLooserAmount: 0,
  });

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Group gap={'xs'} justify="space-between" h="100%" px="md" grow>
          <Text>Lobbyzinho</Text>
          <AppMenu
            status={status}
            stats={stats}
            onStart={() => setStatus('started')}
            onStop={() => setStatus('stopped')}
          />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Lobby status="stopped" playersQueue={queue}></Lobby>
      </AppShell.Main>
    </AppShell>
  );
}
