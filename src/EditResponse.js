import React from "react";
import {Button, ButtonGroup, Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

import ApiRequests from './ApiRequests';
import Config from './config/Config';

export default class EditResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {description: this.props.response};

        this.handleRequest = this.handleRequest.bind(this);
    }

    handleRequest()
    {
        this.setState({description: ''});
        this.props.callBack({}, 'view');
    }

    clickHandler(event) {
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        ApiRequests.put(
            this.handleRequest,
            Config.backOfficeUrl + '/api/response',
            {
                id: this.props.id,
                intent: this.props.intent,
                text: this.state.description
            },
        );
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



