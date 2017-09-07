import React from "react";
import './IntentResponse.css';
import {Button, ButtonGroup, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

import ApiRequests from './ApiRequests';
import Config from './config/Config';

export default class ViewResponses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.handleResponse = this.handleResponse.bind(this);
    }

    componentWillMount() {

        ApiRequests.get(
            this.handleResponse,
            Config.backOfficeUrl + '/api/response/i/'+this.props.intent);

    }

    handleResponse(response)
    {
        this.setState({data: response});
    }

    clickHandler(item, mode, e) {
        e.preventDefault();
        this.props.callBack(item, mode);
    }

    render() {
        const list = this.state.data.map((item, i) => {
            return (
                <ListGroupItem key={i}>
                    <span className="txtOverflow">
                        {item.text}
                    </span>
                    <ButtonGroup className="right-btn">
                        <LinkContainer to={`/Intent/${item.intent}#update`}>
                            <Button bsStyle="info" bsSize="xsmall"
                                    onClick={this.clickHandler.bind(this, item, 'update')}>Edit</Button>
                        </LinkContainer>
                        <LinkContainer to={`/Intent/${item.intent}#delet`}>
                            <Button bsStyle="danger" bsSize="xsmall" onClick={this.clickHandler.bind(this, item, 'delete')}>Delete</Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ListGroupItem>
            );
        });

        if (list.length === 0) {
            return (
                <Col md={12} mdPush={0}>

                    <h3> This Intent has no responses, please add a new one. </h3>

                    <ButtonGroup>
                        <LinkContainer key={'intent'} to='/Intent'>
                            <Button bsStyle="primary">Back</Button>
                        </LinkContainer>
                        <LinkContainer key={'new'} to={`/Intent/${this.props.intent}#create`}>
                            <Button bsStyle="primary" onClick={this.clickHandler.bind(this, {}, 'create')}>Add New</Button>
                        </LinkContainer>
                    </ButtonGroup>

                </Col>
            );
        }
        return (
            <Col md={12} mdPush={0}>

                <ListGroup>
                    {list}
                </ListGroup>

                <ButtonGroup>
                    <LinkContainer key={'intent'} to='/Intent/'>
                        <Button bsStyle="primary">Back</Button>
                    </LinkContainer>
                    <LinkContainer key={'new'} to={`/Intent/${this.props.intent}#new`}>
                        <Button bsStyle="primary" onClick={this.clickHandler.bind(this, {}, 'create')}>Add New</Button>
                    </LinkContainer>
                </ButtonGroup>

            </Col>
        );
    }
}