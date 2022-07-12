import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async/>);

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        })

        const listElement = await screen.findAllByRole('listitem');
        expect(listElement).not.toHaveLength(0);
    })
});