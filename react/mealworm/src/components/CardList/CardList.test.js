import { shallow } from 'enzyme';
import CardList from './';
import Card from './../Card'
import recipes from './../../data/recipes.js';

describe("CardList Component Test", () => {
    it('should render', () => {
        const wrapper = shallow(<CardList recipes={recipes}/>);
        expect(wrapper).toBeTruthy();
    })
    it('should render x cards', () => {
        const recipesLength = recipes.length;
        const wrapper = shallow(<CardList recipes={recipes} />);
        expect(wrapper.find(Card).length).toBe(recipesLength);
    });
});