import { ActionIcon, Button, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';

export default function PlayerFormModal() {
  const [opened, { open, close }] = useDisclosure(false);

  const handleSavePlayer = (): void => {
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
        <TextInput label="Player name" />
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
