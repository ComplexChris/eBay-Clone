import React from "react";
import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import Items from "./Items";

test("Items component renders item information", () => {
  const item = {
    current_item_obj: {
      name: "Mt. Dew",
      description: "Do the Dew",
      model: "903u3232",
      price: 4.12,
    },
  };

  render(<Items itemsSelected={item} />);

  const name = screen.getByText("Mt. Dew");
  const description = screen.getByText(/Do the Dew/);
  const model = screen.getByText(/903u3232/);
  const price = screen.getByText(/US 4.12/);

  expect(name).toBeTruthy();
  expect(description).toBeTruthy();
  expect(model).toBeTruthy();
  expect(price).toBeTruthy();
});
