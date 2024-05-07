import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import App from './App';

test('Renders the BookingForm heading', () => {
    const availableTimes = { availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };
    render(<BookingForm availableTimes={availableTimes} />);
    const headingElement = screen.getByText("Confirm Reservation");
    expect(headingElement).toBeInTheDocument();

});

test('Reserve Table', () => {
  render(<App />);
  const reserveButton = screen.getByText("Reserve Table");
  fireEvent.click(reserveButton);
});

