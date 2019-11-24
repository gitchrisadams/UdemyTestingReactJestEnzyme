import { findByTestAttr, createComponentWrapper } from '../../test/testUtils';
import Congrats from '../Components/Congrats';

it('renders without crashing', () => {
    const wrapper = createComponentWrapper(Congrats);
    const appComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(appComponent.length).toBe(1);
});

it('renders no text when `success` prop is false', () => {
    const wrapper = createComponentWrapper(Congrats, { success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

it('renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = createComponentWrapper(Congrats, { success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
