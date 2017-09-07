import React from "react";

import ViewResponses from './ViewResponses';
import NewResponse from "./NewResponse";
import EditResponse from "./EditResponse";
import DeleteResponse from "./DeleteResponse";

export default class IntentResponse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            item: {},
            mode: 'view'
        };

        this.update = this.update.bind(this);
    }

    update(item, mode){
        console.log("update...");
        this.setState({item: item, mode: mode })
    }

    render() {
        console.log("render parent...")
        var component = <ViewResponses intent={this.props.match.params.name} callBack={this.update}/>;

        switch (this.state.mode) {
            case 'view':
                break;
            case 'create':
                component = <NewResponse intent={this.props.match.params.name} callBack={this.update}/>;
                break;
            case 'update':
                component =
                    <EditResponse id={this.state.item.id} intent={this.state.item.intent}
                                  response={this.state.item.text}  callBack={this.update} />;
                break;
            case 'delete':
                component = <DeleteResponse id={this.state.item.id} intent={this.state.item.intent}
                                            response={this.state.item.text} callBack={this.update} />;
                break;
            default:
                break;
        }

        return component;
    }
}