import React from "react";
import ReactDOM  from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Home from "./Home";

it("renders an h2 element", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var h2 = TestUtils.findRenderedDOMComponentWithTag(
        component, 'h2'
    );

    expect(h2).not.toBeNull();
});

it("renders an h2 element with content", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var h2 = TestUtils.findRenderedDOMComponentWithTag(
        component, 'h2'
    );

    expect(ReactDOM.findDOMNode(h2).textContent)
        .toEqual("Welcome to Vodafone Chatbot BackOffice");
});


it("renders an p element", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var p = TestUtils.findRenderedDOMComponentWithTag(
        component, 'p'
    );

    expect(p).not.toBeNull();
});

it("renders a p element with content", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var p = TestUtils.findRenderedDOMComponentWithTag(
        component, 'p'
    );

    expect(ReactDOM.findDOMNode(p).textContent)
        .toEqual("Here you can configure the bot's settings, add and edit the answers it shows to users.");
});

it("renders a div element with jumbotron class name", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var jumbotron = TestUtils.findRenderedDOMComponentWithClass(
        component, 'jumbotron'
    );

    expect(jumbotron).not.toBeNull();
});

it("renders a div element with col-md-6 class name", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var column = TestUtils.findRenderedDOMComponentWithClass(
        component, 'col-md-6'
    );

    expect(column).not.toBeNull();
});

it("renders a div element with col-md-push-0 class name", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var column = TestUtils.findRenderedDOMComponentWithClass(
        component, 'col-md-push-0'
    );

    expect(column).not.toBeNull();
});

it("renders a div element with a row class name", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var row = TestUtils.findRenderedDOMComponentWithClass(
        component, 'row'
    );

    expect(row).not.toBeNull();
});

it("renders a div element with a show-grid class element", function () {
    var component = TestUtils.renderIntoDocument(
        <Home />
    );

    var grid = TestUtils.findRenderedDOMComponentWithClass(
        component, 'show-grid'
    );

    expect(grid).not.toBeNull();
});