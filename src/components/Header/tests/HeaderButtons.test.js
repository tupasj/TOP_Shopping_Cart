import { render, screen } from '@testing-library/react';
import { Header, HeaderButtons } from '../../Header';

it("renders displays the correct item quantity on the cart icon", () => {
    render(<HeaderButtons />);
    expect(screen.getByText('0').textContent).toMatch('0');
});
