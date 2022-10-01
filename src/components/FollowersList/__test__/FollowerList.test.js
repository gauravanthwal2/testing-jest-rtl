import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowerList", () => {
  beforeEach(() => {
    render(<MockFollowerList />);
  });

  test("should render follower item", async () => {
    const followerDivElement = await screen.findByTestId("follower-item-0");
    // screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should render multiple follower items", async () => {
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
