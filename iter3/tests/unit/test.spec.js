import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Electorate from "@/components/Electorate.vue";

describe("Electorate", () => {
  const wrapper = mount(Electorate);

  it("button exists and is visible", () => {
    expect(wrapper.find("button").isVisible()).to.be.true;
  });

  it("on button click getElectorateData is called", () => {
    const onClose = Electorate.getElectorateData
    const wrapper = mount(Electorate, {
      propsData: {
        onClose
      }});
    wrapper.find('button').trigger('click');
    expect(onClose).toHaveBeenCalled;
  });

  //it("when button is clicked, div displays electorate.json", () => {
  //  
  //});

});
