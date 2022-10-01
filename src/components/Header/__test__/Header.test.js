import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("should render same test as passed into title props", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// test("should render a heading tag", async()=>{
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// })

// test("should render heading with title Header", async()=>{
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByTitle("Header");
//     expect(headingElement).toBeInTheDocument();
// })

// test("shoulda render a heading with header-1 data-testid", async()=>{
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// })

// FIND BY
// test("should render same test as passed into title props", async()=>{
//     render(<Header title="My Header"/>);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument()
// })

// QUERY BY
// test("should render same test as passed into title props", async()=>{
//     render(<Header title="My Header"/>);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument()
// })
