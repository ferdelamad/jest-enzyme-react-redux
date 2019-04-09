import React from "react";
import ReactDOM from "react-dom";
import App, { Link } from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("should contain 1 p element", () => {
    const wrapper = shallow(<App />);
    //shallow(<App />, { context: {}, disableLifecycleMethods: bool})
    expect(wrapper.find("p").length).toBe(1);
  });

  it("should contain className of App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".App").exists()).toBe(true);
  });

  // it("should contain a ul with 3 li", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find("ul").children.length).toBe(3);
  // });

  it("ul should have a className of tyler", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("ul").hasClass("tyler")).toBe(true);
  });

  //find by prop
  // it("find element by prop", () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find('[text="I am title"]').text()).toBe("I am title");
  // });

  //snapshot press U to re-run
  it("matches the snapshot", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  it("on button click changes p text", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    expect(wrapper.find(".button-state").text()).toBe("No!");
    button.simulate("click");
    expect(wrapper.find(".button-state").text()).toBe("Yes!");
  });

  it("on input change, title changes text", () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find("input");
    expect(wrapper.find("h2").text()).toBe("");
    input.simulate("change", { currentTarget: { value: "Tyler" } });
    expect(wrapper.find("h2").text()).toBe("Tyler");
  });
});

describe("<Link />", () => {
  it("link component accepts address prop", () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.instance().props.address).toBe("www.google.com");
  });

  it("a tag node renders href correctly", () => {
    const wrapper = shallow(<Link address="www.google.com" />);

    expect(wrapper.props().href).toBe("www.google.com");
  });
});
