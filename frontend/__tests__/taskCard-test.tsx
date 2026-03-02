import { render, fireEvent, screen } from "@testing-library/react";
import TaskCard from "../app/components/taskCard";
import { titles } from "../app/constants/titles";

jest.mock("@mui/x-date-pickers/TimePicker", () => {
  return {
    TimePicker: () => <div>Mocked TimePicker</div>,
  };
});

test("shows the maximized task card when the minimized task card is clicked", () => {
  render(<TaskCard id={1} closeTask={() => {}} />);

  const minCardTitleButton = screen.getByRole("button", { name: titles.new });
  fireEvent.click(minCardTitleButton);
  expect(screen.getByLabelText("close")).toBeInTheDocument();
});
