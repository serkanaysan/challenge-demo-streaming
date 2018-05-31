import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Message extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={12}><p>{this.props.message}</p></Col>
                </Row>
            </Grid>

        )
    }
}
            
export default Message