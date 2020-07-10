import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    ///Arrange
    render(<CheckoutForm />);

    ///Act
    const header = screen.getByText(/Checkout Form/i);

    ///Assert
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details", () => {

    ///Arrange
    render(<CheckoutForm />);
    const successMessageText = (/You have ordered some plants!/i);

    ///Act
    //get inputs
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    //get checkout button, click
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    ///Assert
    //get success message div, check text content
    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toHaveTextContent(successMessageText);

});
