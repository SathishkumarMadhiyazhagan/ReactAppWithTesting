import { render, screen } from "@testing-library/react"
import { PageNotFound } from "../PageNotFound"
import { BrowserRouter } from "react-router-dom";

describe('PageNotFound Page Test', () => {

    test("Render Text and Image", () => {
        render(<PageNotFound />, {wrapper: BrowserRouter});
        const pnfText = screen.getByTestId("pnfText");

        expect(pnfText.innerHTML).toBe("Oops - Page Not Found!");

        const Image = screen.getByAltText("Page Not Found!");

        expect(Image).toBeTruthy();

        const homeBtn = screen.getByTestId("homeBtn");
        expect(homeBtn).toBeTruthy();
    })
})