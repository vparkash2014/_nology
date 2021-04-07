import { shallow } from 'enzyme';
import FeedbackPanel from './';

describe('FeedbackPanel Component Test', () => {

    it('should render', () => {
        const wrapper = shallow(<FeedbackPanel />);
        expect(wrapper).toBeTruthy;
    })

    it('it should display the props', () => {
        const title = 'MyTitle';
        const description = 'MyDescription';
        
        // Shallow rendering the Feedback Panel with props
        const wrapper = shallow(<FeedbackPanel title={title }description={description}/>)
        // 1. Finding tags with tagname of h2
        // 2. Grabbing the text from h2
        // 3. Asserting that the text is the same as the prop
        expect(wrapper.find('h2').text()).toEqual(title);
        expect(wrapper.find('p').text()).toEqual(description);
    })
})