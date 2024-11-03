import { render, screen } from '@/test-utils';

import AppMenu from '.';

describe('<AppMenu />', () => {
  it('should render the heading', () => {
    render(<AppMenu />);

    expect(screen.getByRole('heading', { name: /AppMenu/i })).toBeInTheDocument();
  });
});
