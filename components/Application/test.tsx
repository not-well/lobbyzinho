import { render, screen, userEvent, waitFor } from '@/test-utils';

import Application from '.';

describe('<Application />', () => {
  it('should change the icon to stop icon', async () => {
    const user = userEvent.setup();

    render(<Application />);

    await user.click(screen.getByTestId('start-icon'));
    waitFor(() => {
      expect(screen.getByTestId('stop-icon')).toBeInTheDocument();
    });
  });

  it('should change the icon to start icon', async () => {
    const user = userEvent.setup();

    render(<Application />);

    await user.click(screen.getByTestId('start-icon'));
    waitFor(() => {
      expect(screen.getByTestId('stop-icon')).toBeInTheDocument();
    });
    await user.click(screen.getByTestId('stop-icon'));
    waitFor(() => {
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });
  });
});
