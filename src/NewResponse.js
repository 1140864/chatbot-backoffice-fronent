/**
 * Created by SousaM1 on 07/08/2017.
 */


import React from "react";
import './NewResponse.css';
import {Button, ButtonGroup, Col, ControlLabel, FormGroup, FormControl, Modal} from "react-bootstrap";

import ApiRequests from './ApiRequests';
import Config from './config/Config';

export default class NewResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            showModal: false
        };

        this.handleResponse = this.handleResponse.bind(this);
    }

    handleResponse(response){
        this.setState({description: '', showModal: response});
    }

    clickHandler(event) {
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        ApiRequests.post(
            this.handleResponse,
            Config.backOfficeUrl + '/api/response',
            { intent: this.props.intent, text: this.state.description }
        );
    }

    close() {
        this.setState({showModal: false});
        this.props.callBack({}, 'view');
    }

    textChangeHandler(event) {
        this.setState({description: event.target.value});
    }

    cancel(event) {
        // Stop the form from refreshing the page on submit
        event.preventDefault();
        this.props.callBack({}, 'view');
    }

    render() {

        if (this.state.showModal)
            return (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Create response</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        The new response is created with success
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="primary" onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            );

        return (

            <Col md={12} mdPush={0}>

                <h2> New Response for "{this.props.intent}" intent</h2>

                <form>
                    <FormGroup controlId="formControlsTextarea">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl componentClass="textarea"
                                     onChange={this.textChangeHandler.bind(this)}
                                     placeholder="textarea"
                                     value={this.state.description}
                        />
                    </FormGroup>
                    <ButtonGroup className="right-btn">
                        <Button bsStyle="danger"
                                onClick={this.cancel.bind(this)}>
                            Cancel
                        </Button>
                        <Button bsStyle="success"
                                type="submit"
                                onClick={this.clickHandler.bind(this)}>
                            Submit
                        </Button>
                    </ButtonGroup>
                </form>
            </Col>
        );
    }
}