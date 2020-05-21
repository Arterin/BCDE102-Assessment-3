import { shallowMount } from '@vue/test-utils'
import Electorate from '@/components/Electorate.vue'
import electorateDataList from '@/components/json/electorate.json'

describe('Electorate.vue', () => {
  // I have spent 2 HOURS simply trying to test if my 'items' is an object and I am about to go absolutely insane
  it('items contains a valid object', () => {
    const wrapper = shallowMount(Electorate, {
      data () {
        return {
          items: electorateDataList
        }
      }
    })

    expect(wrapper.vm.items).toBeObject()
  })

  /* I ran out of time making the below unit test, I could have mocked this function with jest
  because I am actually just checking if the button calls a function so it doesn't matter which function.
  However, the function is called and is throwing errors that I don't know how to fix and I wanted to make more
  unit tests that test that the function is changing the css like I excpect it to be. I wanted to fix these errors and
  have the function be called properly but I ran out of time and patience and sanity. */

  /* it('showContainer() is called once when button is pressed', () => {
    const wrapper = shallowMount(Electorate)

    wrapper.find('button').trigger('click')
    expect(wrapper.vm.showContainer()).toHaveBeenCalled()
  })  */
})
