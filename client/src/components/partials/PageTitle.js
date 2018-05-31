import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

class PageTitle extends React.Component {
    render() {
        return(
            <div className="page-title">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}><h3 className="page-title">{this.props.title}</h3></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PageTitle