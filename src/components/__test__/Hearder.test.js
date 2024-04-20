import { render, screen } from "@testing-library/react"
import { Header } from "../Header"
import userEvent from "@testing-library/user-event";

describe("Header Component Testing", () => {
    test("Render the heading text", () => {
        render(<Header heading="Word Counter"/>);
        const heading = screen.getByTestId("heading");
        
        expect(heading.innerHTML).toBe("Word Counter")
    })

    test("Render the subHeading text", () => {
        render(<Header subHeading="Word Counter subHeading"/>);
        const subHeading = screen.getByTestId("subHeading");
        
        expect(subHeading.innerHTML).toBe("Word Counter subHeading")
    })
})