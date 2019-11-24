import { shallow } from 'enzyme';
import React from 'react';

/**
 *
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute to search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

/**
 * Factory function to create a ShallowWrapper for the Component
 * @function createComponentWrapper
 * @param {object} props  - Component props for setup.
 * @param {object} state  - Initial state for setup.
 * @returns {ShallowWrapper}
 */
export const createComponentWrapper = (Component, props = {}, state = null) => {
    const wrapper = shallow(<Component {...props} />);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
};
