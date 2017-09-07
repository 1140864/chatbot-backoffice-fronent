import React from "react";
import { Col, Grid, Jumbotron, Row} from "react-bootstrap";

export default class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={6} mdPush={0}>
                        <Jumbotron >
                            <h2>Welcome to Vodafone Chatbot BackOffice</h2>
                            <p>Here you can configure the bot's settings, add and edit the answers it shows to users.</p>
                        </Jumbotron>
                    </Col>

                </Row>
            </Grid>
        );
    }
}
