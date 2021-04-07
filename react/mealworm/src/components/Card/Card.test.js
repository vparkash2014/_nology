// import {describe, test, it }  from 'jest';
import { shallow } from 'enzyme';
import Card from './';
import CardFront from './../CardFront';
import CardBack from './../CardBack'

import recipes from './../../data/recipes.js';

// describe function groups tests together for a single function or signle component or a thing you are testing 
// it function is the same as the test function but it used for symatics -- "it("should..")"
// shallow function is doing a shallow render of the component 
describe("Card Component Test", () => {
    it("should render", () => {
        const wrapper = shallow(<Card />) 
        // shallow render of the card- shallow render test the unit but not the childern
        // so it will render Card but not the things Card calls
        expect(wrapper).toBeTruthy(); // checking if Card is rendering
    });

    // checking if the cardfront is put on the page
    it("should render CardFront and should not render CardBack", () => {
        const recipe = recipes[0];
        const wrapper = shallow(<Card dishInformation={recipe} />)
        // find will look for the component inside the render an toBe check is that component has been rendered. If rendered, then the length will be 1 and if it is not rendered, the length will be 0 
        // we can use find to look for classname, id etc
        expect(wrapper.find(CardFront).length).toBe(1);
        // since CardBack is only rendered when CardFront is clicked, the length should be 0
        expect(wrapper.find(CardBack).length).toBe(0);
    })

    it('should flip the card when clicked', () => {
        const recipe = recipes[0];
        const wrapper = shallow(<Card dishInformation={recipe} />)
        expect(wrapper.find(CardFront).length).toBe(1);
        expect(wrapper.find(CardBack).length).toBe(0);
        // simulate with simulate an click event and output what the result of that event it
        wrapper.simulate('click');
        // card has been flipped so CardBack should be rendered
        expect(wrapper.find(CardFront).length).toBe(0);
        expect(wrapper.find(CardBack).length).toBe(1);

        wrapper.simulate('click');
        expect(wrapper.find(CardFront).length).toBe(1);
        expect(wrapper.find(CardBack).length).toBe(0);
    })
});