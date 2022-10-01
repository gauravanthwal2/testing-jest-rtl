import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button");
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    });
};

describe("Todo", () => {
  test("should render Todo component", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, { target: { value: "Go to market" } });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/Go to market/i);
    expect(divElement).toBeInTheDocument();
  });


  test("should render corrent number of tasks in the DOM", () => {
    render(<MockTodo />);
    addTasks(["go to market", "come form market", "again go to market"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });


  test("should not have completed class when initial rendered", () => {
    render(<MockTodo />);
    addTasks(["go to market"]);
    const divElements = screen.getByText(/go to market/i);
    expect(divElements).not.toHaveClass("todo-item-active");
  });


  test("should have completed class when task completed", () => {
    render(<MockTodo />);
    addTasks(["go to market"]);
    const divElements = screen.getByText(/go to market/i);
    fireEvent.click(divElements);
    expect(divElements).toHaveClass("todo-item-active");
  });
});
