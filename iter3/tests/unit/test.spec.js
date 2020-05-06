import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Electorate from "@/components/Electorate.vue";

describe("Electorate", () => {
  const wrapper = mount(Electorate);

  it("button exists and is visible", () => {
    expect(wrapper.find("button").isVisible()).to.be.true;
  });

  //it("on button click getElectorateData is called", () => {
  //  wrapper.find("button").trigger("click");
  //  expect(wrapper.emitted("getElectorateData")).to.have.length(1);
  //});

  //it("when button is clicked, div displays electorate.json", () => {
  //
  //  });
});
