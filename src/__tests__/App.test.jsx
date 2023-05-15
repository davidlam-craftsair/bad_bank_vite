import { test, expect } from "vitest";
import React from 'react';
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from "../App.jsx";


test("test for properly set up the test for vite", () => {

  expect(Math.sqrt(4)).toBe(2);
})

test("test first page is login page", () => {
  // render the component first
  const { getByText, getAllByText } = render(<App />);

  //
  getByText("Please login to your account");

})

test("test user login submit", () => {
  const { getByText, getByLabelText, getAllByText } = render(<App />);

  const input = getByLabelText();
})
