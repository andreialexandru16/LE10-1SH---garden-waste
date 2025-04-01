import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Choose Your Skip Size text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Choose Your Skip Size/i);
  expect(linkElement).toBeInTheDocument();
});
