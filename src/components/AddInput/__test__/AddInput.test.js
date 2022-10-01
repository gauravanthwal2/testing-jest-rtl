import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("should render Input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input box", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}});
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  test("should have empty input when submit button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /add/i});

    fireEvent.change(inputElement, {target: {value: "Go Grocery Shopping"}});
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
