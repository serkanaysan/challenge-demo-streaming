import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/movieActions';

import PageTitle from './partials/PageTitle';
import Message from './partials/Message';

class Movies extends React.Component {

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        const { error, loading, movies } = this.props;

        if (error) {
            return (
                <div>
                    <PageTitle title="Popular Movies" />
                    <Message message="Opps, something went wrong..." />
                </div>
            )
        }

        if (loading) {
            return (
                <div>
                    <PageTitle title="Popular Movies" />
                    <Message message="Loading..." />
                </div>
            )
        }

        return (
            <div>
                <PageTitle title="Popular Movies" />
                <Grid>
                    <Row className="show-grid">
                        {movies.map(movie => (
                            <Col key={movie.title} xs={12} sm={3} md={2} className="col-detailitem">
                                <div className="detailitem">
                                    <img alt={movie.title} src={movie.images.posterArt.url} />
                                    <p>{movie.title}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </div>
        )
    }
}

Movies.propTypes = {
    fetchMovies: PropTypes.func.isRequired,
    movies: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    movies: state.movies.items,
    loading: state.movies.loading,
    error: state.movies.error
});

export default connect(mapStateToProps, { fetchMovies })(Movies);