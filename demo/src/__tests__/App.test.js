import { findByTestAttr, createComponentWrapper } from '../../test/testUtils';
import App from '../App';

it('renders without crashing', () => {
    const wrapper = createComponentWrapper(App);
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.length).toBe(1);
});
