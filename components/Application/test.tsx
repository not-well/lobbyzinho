import { render, screen } from '@/test-utils';

import Application from '.';

describe('<Application />', () => {
  it('should render the heading', () => {
    render(<Application />);

    expect(screen.getByRole('heading', { name: /Application/i })).toBeInTheDocument();
  });
});
