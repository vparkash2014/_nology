import { shallow, mount } from 'enzyme';
import SearchBar from './';

describe("SearchBar Component Test", () => {
    it('should render', () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toBeTruthy();
    })

    it('should call setter', () => {
        // mock function allows us to assert of the function you have passed has been called
        const myMock = jest.fn();
        const wrapper = mount(<SearchBar setSearch={myMock} opened={true} />);
        const input = wrapper.find('input');
        input.simulate('change');
        // if the click works and myMock is passed through, then the length will be 1 since it was called once
        expect(myMock.mock.calls.length).toBe(1);
    })

    test('if clicked the searchbar toggles', () => {
        const wrapper = mount(<SearchBar opened={false} />);
        expect(wrapper.find({className: 'SearchBar_input'})).toHaveLength(0);

        wrapper.find({className:'SearchBar_icon'}).simulate('click')
        expect(wrapper.find({className: 'SearchBar_input'})).toHaveLength(1);

        wrapper.find({className:'SearchBar_icon'}).simulate('click')
        expect(wrapper.find({className: 'SearchBar_input'})).toHaveLength(0);

    })
})