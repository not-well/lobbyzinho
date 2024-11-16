import { LobbyStatus } from '@/shared/types/LobbyStatus';
import { Stats } from '@/shared/types/Stats';
import { ActionIcon, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconInfoCircle, IconX } from '@tabler/icons-react';

export type LobbyStatsProps = {
  stats: Stats;
  lobbyStatus: LobbyStatus;
};

export function normalizePlayersNames(playersNames: string[]) {
  if (playersNames.length === 0) {
    return '';
  }

  if (playersNames.length === 1) {
    return playersNames[0];
  }

  if (playersNames.length === 2) {
    return playersNames.join(' & ');
  }

  return playersNames.join(', ');
}

export function StatsInfo({
  round,
  lastWinner,
  longestWinStreak,
  longestWinStreakPlayer,
  biggestWinner,
  biggestWinnerAmount,
  biggestLooser,
  biggestLooserAmount,
}: Stats) {
  return (
    <>
      <Text data-testid="round-count">
        <Text fw={700} span>
          Round:
        </Text>
        {` ${round}`}
      </Text>
      <Text data-testid="last-winner">
        <Text fw={700} span>
          Last winner:
        </Text>
        {` ${lastWinner}`}
      </Text>
      <Text data-testid="longest-win-streak">
        <Text fw={700} span>
          Longest win streak:
        </Text>
        {` ${longestWinStreak} (${normalizePlayersNames(longestWinStreakPlayer)})`}
      </Text>
      <Text data-testid="biggest-winner">
        <Text fw={700} span>
          {`Biggest winner${biggestWinner.length > 1 ? 's' : ''}:`}
        </Text>
        {` ${normalizePlayersNames(biggestWinner)} (${biggestWinnerAmount} wins)`}
      </Text>
      <Text data-testid="biggest-looser">
        <Text fw={700} span>
          {`Biggest looser${biggestLooser.length > 1 ? 's' : ''}:`}
        </Text>
        {` ${normalizePlayersNames(biggestLooser)} (${biggestLooserAmount} defeats)`}
      </Text>
    </>
  );
}

export default function LobbyStats({ stats, lobbyStatus }: LobbyStatsProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Lobby stats"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        position="left"
        offset={8}
        radius="md"
        styles={{
          content: {
            height: 'fit-content',
          },
        }}
        closeButtonProps={{
          icon: <IconX data-testid="close-button" />,
        }}
      >
        {lobbyStatus === 'stopped' ? (
          <Text size="xl">Lobby not started</Text>
        ) : (
          <StatsInfo {...stats} />
        )}
      </Drawer>

      <ActionIcon
        size="xl"
        variant="default"
        onClick={open}
        data-testid="lobby-stats-button"
      >
        <IconInfoCircle />
      </ActionIcon>
    </>
  );
}
