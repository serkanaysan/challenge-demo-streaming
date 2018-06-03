import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSeries } from '../actions/seriesActions';

import PageTitle from './partials/PageTitle';
import Message from './partials/Message';

class Series extends React.Component {

    componentDidMount() {
        this.props.fetchSeries();
    }

    render() {
        const { error, loading, series } = this.props;

        if (error) {
            return (
                <div>
                    <PageTitle title="Popular Series" />
                    <Message message="Opps, something went wrong..." />
                </div>
            )
        }

        if (loading) {
            return (
                <div>
                    <PageTitle title="Popular Series" />
                    <Message message="Loading..." />
                </div>
            )
        }

        return (
            <div>
                <PageTitle title="Popular Series" />
                <Grid>
                    <Row className="show-grid">
                        {series.map(it => (
                            <Col key={it.title} xs={12} sm={3} md={2} className="col-detailitem">
                                <div className="detailitem">
                                    <img alt={it.title} src={it.images.posterArt.url} />
                                    <p>{it.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div>
        )
    }
}

Series.propTypes = {
    fetchSeries: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    series: state.series.items,
    loading: state.series.loading,
    error: state.series.error
});

export default connect(mapStateToProps, { fetchSeries })(Series);