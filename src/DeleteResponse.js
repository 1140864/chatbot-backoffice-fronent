import React from "react";
import {Button, Modal} from "react-bootstrap";
import PropTypes from 'prop-types';

import ApiRequests from './ApiRequests';
import Config from './config/Config';

export default class DeleteResponse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true};

        this.handleResponse = this.handleResponse.bind(this)
    }

    clickHandler(event) {
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        ApiRequests.delete(
            this.handleResponse,
            Config.responseUrl + this.props.id,
            {intent: this.props.intent,text: this.state.description} );
    }

    handleResponse(response) {
        this.setState({show: response});
        this.props.callBack({}, 'view');
    }

    close(){
        this.setState({show: false});
        this.props.callBack({}, 'view');
    }

    render() {
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Delete response</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Are you really sure you want delete the chosen response?
                    </Modal.Body>

                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.close.bind(this)} >No</Button>
                        <Button bsStyle="success" onClick={this.clickHandler.bind(this)}>Yes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}

DeleteResponse.propTypes = {
    id: PropTypes.string.isRequired,
    intent: PropTypes.string.isRequired,
    response: PropTypes.string.isRequired,
    callBack: PropTypes.func.isRequired
};

