import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import { mount } from 'enzyme';

import DeleteResponse from './DeleteResponse';


const updateMock = jest.fn();
const wrapper = mount(<DeleteResponse id="248r5fg2847gh924" intent="greeting" response="hello" callBack={updateMock}/>);
const component = TestUtils.renderIntoDocument(<DeleteResponse id="248r5fg2847gh924" intent="greeting" response="hello" callBack={updateMock}/>);

it('renders a DeleteResponse with the id 248r5fg2847gh924', () => {

    expect(wrapper.instance().props.id).toEqual("248r5fg2847gh924");
});

it('renders a DeleteResponse with the intent code greeting', () => {

    expect(wrapper.instance().props.intent).toEqual("greeting");
});

it('renders a DeleteResponse with the description hello', () => {

    expect(wrapper.instance().props.response).toEqual("hello");
});

it('renders a DeleteResponse with the callBack update', () => {

    expect(wrapper.instance().props.callback).toEqual(updateMock());
});

it('renders a DeleteResponse with the default state show var true', () => {

    expect(wrapper.instance().state.show).toBeTruthy();
});

it('Should render the modal header', () => {

    var modalHeader = TestUtils.findRenderedDOMComponentWithClass(component, 'modal-header');
    expect(modalHeader).not.toBeNull();
});

it("Should render the model header with content", function () {

    var modalHeader = TestUtils.findRenderedDOMComponentWithClass(component,'modal-header');

    expect(ReactDOM.findDOMNode(modalHeader).textContent)
        .toEqual("Delete response");
});

it('Should render the modal body', () => {

    var modalBody = TestUtils.findRenderedDOMComponentWithClass(component,'modal-body');

    expect(modalBody).not.toBeNull();
});

it("Should render the model body with content", function () {

    var modalBody = TestUtils.findRenderedDOMComponentWithClass(component,'modal-body');

    expect(modalBody.textContent)
        .toEqual("Are you really sure you want delete the chosen response?");
});

it('Should render the modal footer', () => {

    var modalFooter = TestUtils.findRenderedDOMComponentWithClass(component,'modal-footer');

    expect(modalFooter).not.toBeNull();
});

it("Should render the model with 2 buttons", function () {

    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(
        component, 'button'
    );

    expect(buttons.length).toEqual(2)

});

it("On call close function state show should be false", function () {

    wrapper.instance().close();

    expect(wrapper.instance().state.show).toEqual(false);
});

it("On call handleRequest function state show should be false", function () {

    wrapper.instance().handleResponse(false);

    expect(wrapper.instance().state.show).toEqual(false);
});

