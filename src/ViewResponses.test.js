import React from 'react';
import TestUtils from 'react-dom/test-utils';

import { mount } from 'enzyme';

import ViewResponses from './ViewResponses';

const data =
    [{
        valid: true,
        id: "599ca156c24c3f64f0356774",
        intent: "test",
        text: "test text"
    },
    {
        valid: true,
        id: "599ca164c24c3f64f0356775",
        intent: "test",
        text: "test text 2"
    }];

const updateMock = jest.fn();
const wrapper = mount(<ViewResponses intent="test" callBack={updateMock}/>);
const component = TestUtils.renderIntoDocument(<ViewResponses intent="test" callBack={updateMock}/>);

it('renders a ViewResponse with the intent code greeting', () => {

    expect(wrapper.instance().props.intent).toEqual("test");
});

it('renders a ViewResponse with the callBack update', () => {

    expect(wrapper.instance().props.callback).toEqual(updateMock());
});

it('renders a ViewResponse with the default state show var true', () => {

    expect(wrapper.instance().state.data).toBe([]);
});

it('renders a ViewResponse with the default state show var true', () => {

    expect(wrapper.instance().state.data).toBe([]);
});

it("On call handleRequest function state show should be false", function () {

    wrapper.instance().handleResponse(data);

    expect(wrapper.instance().state.data).toEqual(data);
});

