import { render, screen } from '@/test-utils';

import Match from '.';

describe('<Match />', () => {
  const firstDummyPlayer = {
    id: '1',
    name: 'First_Dummy',
  };
  const secondDummyPlayer = {
    id: '1',
    name: 'Second_Dummy',
  };

  it('should display players name on match component', () => {
    render(
      <Match firstPlayer={firstDummyPlayer} secondPlayer={secondDummyPlayer} />
    );
    expect(screen.getByText(firstDummyPlayer.name)).toBeInTheDocument();
    expect(screen.getByText(secondDummyPlayer.name)).toBeInTheDocument();
  });
});
