import { usePlayerAPI } from '@/api/usePlayerAPI';
import { PlayerContext } from '@/context/playerContext';
import { ActionIcon, Button, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import { useContext, useState } from 'react';

export default function PlayerFormModal() {
  const [playerName, setPlayerName] = useState('');

  const [opened, { open, close }] = useDisclosure(false);

  const { enqueuePlayer } = useContext(PlayerContext);

  const { createPlayer } = usePlayerAPI();

  const handleChange = (event: any): void => {
    setPlayerName(event.target.value);
  };

  const handleSavePlayer = async (): Promise<void> => {
    if (playerName !== '') {
      const newPlayer = await createPlayer({ name: playerName });
      enqueuePlayer(newPlayer);
    }

    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Add a new player"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <TextInput label="Player name" onChange={handleChange} />
        <Group justify="flex-end" mt="md">
          <Button onClick={handleSavePlayer}>Save</Button>
        </Group>
      </Modal>

      <ActionIcon
        size="xl"
        variant="default"
        onClick={open}
        data-testid="new-player-button"
      >
        <IconPlus />
      </ActionIcon>
    </>
  );
}
