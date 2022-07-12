import { render, screen } from '@testing-library/react';

import Greeting from './Greeting';


test('Contains Greeting text', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
})