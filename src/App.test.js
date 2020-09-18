import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});

it("renders without crashing", () => {
  shallow(<App />);
});
it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(header)).toEqual(true);
});

it.skip("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(header)).toEqual(true);
});

it("renders correctly", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});
