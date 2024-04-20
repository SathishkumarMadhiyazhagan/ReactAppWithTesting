import { act, fireEvent, render, screen } from "@testing-library/react"
import { Counter } from "../Counter"
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"

describe("Counter Components Test", () => {
    test("Render the textarea", () => {
        const {getByTestId, getByPlaceholderText} = render(<Counter />);
        const textarea = getByTestId("textArea");
        const placeholder = getByPlaceholderText("Type or paste your text")

        expect(textarea).toBeTruthy();
        expect(placeholder).toBeTruthy();
    });

    test("Render the ClearButton", () => {
        const {getByTestId} = render(<Counter />);
        const clearBtn = getByTestId('clearBtn');

        expect(clearBtn).toBeDisabled();
    });

    it("Render the charLength", () => {
        const {getByTestId} = render(<Counter />);
        const charLength = getByTestId('charLength');

        expect(charLength.innerHTML).toBe("Character: 0");
    })

    it("Render the wordLength", () => {
        render(<Counter />);
        const wordLength = screen.getByTestId('wordLength');

        expect(wordLength.innerHTML).toBe("Word: 0");
    })

    it("Render the wordLength", () => {
        render(<Counter />);
        const wordLength = screen.getByText('Word: 0');

        expect(wordLength).toBeInTheDocument();
    })

    test('Change TextArea', () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const charLength = screen.getByTestId('charLength');
        const wordLength = screen.getByTestId('wordLength');

        act(() => {
        userEvent.type(textArea, 'sathish ');
        })
        expect(charLength.innerHTML).toBe("Character: 7");
        expect(wordLength.innerHTML).toBe("Word: 1");
    })

    test('Clear TextArea Using Button', () => {
        render(<Counter />);
        const textArea = screen.getByTestId("textArea");
        const clearBtn = screen.getAllByTestId("clearBtn");
        const charLength = screen.getByTestId("charLength");
        const wordLength = screen.getByTestId("wordLength");

        act(() => {
        userEvent.type(textArea, 'sathish ');
        })
        expect(charLength.innerHTML).toBe("Character: 7");
        expect(wordLength.innerHTML).toBe("Word: 1");

        act(() => {
        fireEvent.click(clearBtn[0])
        })
        expect(charLength.innerHTML).toBe("Character: 0");
        expect(wordLength.innerHTML).toBe("Word: 0");
    })

});
