import { render, screen, userEvent, waitFor } from '@/test-utils';

import PlayerFormModal from '.';
import { FormEvent } from 'react';

describe('<PlayerFormModal />', () => {
  it('should not render the modal by default', () => {
    render(<PlayerFormModal />);

    expect(screen.queryByText(/add a new player/i)).not.toBeInTheDocument();
  });

  it('should render the modal when the button is clicked', async () => {
    const user = userEvent.setup();

    render(<PlayerFormModal />);

    await user.click(screen.getByTestId('new-player-button'));
    await waitFor(() => {
      expect(screen.queryByText(/add a new player/i)).toBeInTheDocument();
    });
  });

  it('should hide the modal when close button is clicked', async () => {
    const user = userEvent.setup();

    render(<PlayerFormModal />);

    await user.click(screen.getByTestId('new-player-button'));

    await waitFor(() => {
      expect(screen.queryByText(/add a new player/i)).toBeInTheDocument();
    });

    await user.click(screen.getAllByRole('button')[0]);

    await waitFor(() => {
      expect(screen.queryByText(/add a new player/i)).not.toBeInTheDocument();
    });
  });

  it('should close the modal after save the player name', async () => {
    const user = userEvent.setup();

    render(<PlayerFormModal />);

    await user.click(screen.getByTestId('new-player-button'));

    await waitFor(() => {
      expect(screen.queryByText(/add a new player/i)).toBeInTheDocument();
    });

    await user.click(screen.getByText(/Save/i));

    await waitFor(() => {
      expect(screen.queryByText(/add a new player/i)).not.toBeInTheDocument();
    });
  });
});
