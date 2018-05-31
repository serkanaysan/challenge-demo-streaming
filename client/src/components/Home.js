import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap'

import PageTitle from './partials/PageTitle';

class Home extends React.Component {
    render() {
        return (
            <div>
                <PageTitle title="Popular Titles" />
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} sm={3} md={3} lg={2}>
                            <div className="homeitem">
                                <div className="itembody">
                                    <div className="caption">
                                        <NavLink to="/series">SERIES</NavLink>
                                    </div>
                                </div>
                                <p>Popular Series</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={3} md={3} lg={2}>
                            <div className="homeitem">
                                <div className="itembody">
                                    <div className="caption">
                                        <NavLink to="/movies">MOVIES</NavLink>
                                    </div>
                                </div>
                                <p>Popular Movies</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Home