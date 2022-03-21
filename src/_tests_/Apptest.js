import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Dashboard,
  Students,
  Navbar,
  Matches,
  AddStudent,
  AddMatches,
} from "../fetch";

test("renders Dashboard screen", async () => {
  render(<Dashboard url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("renders Students screen", async () => {
  render(<Students url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("alert"));
  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
test("renders Navbar screen", async () => {
  render(<Navbar url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("renders Matches screen", async () => {
  render(<Matches url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("alert"));
  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
test("renders Add Student screen", async () => {
  render(<AddStudent url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("heading"));
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});

test("renders Add Matches screen", async () => {
  render(<AddMatches url="/login" />);
  fireEvent.click(screen.getByText("Load Login"));
  await waitFor(() => screen.getByRole("alert"));
  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toBeDisabled();
});
