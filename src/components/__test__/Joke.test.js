import { render, waitFor } from "@testing-library/react"
import { Joke } from "../Joke"
import { wait } from "@testing-library/user-event/dist/utils";

describe('Joke Component Testing', () => {
    it('Fetch Api Testing', async () => {
        const {getByTestId} = render(<Joke />);
        const jokeHeadline = getByTestId("jokeHeadline");

        await wait(() => {
            expect(jokeHeadline.innerHTML).toBeTruthy()
        });
    })
})