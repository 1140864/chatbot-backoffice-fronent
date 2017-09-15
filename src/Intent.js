import React from "react";

import {Col, ListGroup, ListGroupItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import Config from './config/Config';
import axios from "axios";

export default class Intent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        var self = this;
        axios.get(Config.intentUrl)
            .then(function (response) {
                self.setState({data: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        this.state.data.sort(
            function (a, b) {
                if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
                if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
                return 0;
            }
        );

        const list = this.state.data.map((item, i) => {
            return ( <LinkContainer key={i} to={`${Config.gitHubPages}/Intent/${item.name}`}>
                <ListGroupItem>{item.name}</ListGroupItem>
            </LinkContainer> );
        });

        return (
            <Col md={12} mdPush={0}>
                <ListGroup>
                    {list}
                </ListGroup>
            </Col>
        );
    }
}