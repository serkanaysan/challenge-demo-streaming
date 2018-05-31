import React from 'react';
import { Grid, Row } from 'react-bootstrap'

import PageTitle from './partials/PageTitle';
import Item from './partials/Item';
import Message from './partials/Message';

class Series extends React.Component {

    constructor(props) {
        super(props)

        this.state = { rows: [], message: <Message message="Loading..." /> };
        this.callApi()
            .then(res => {
                var items = []
                res.forEach(series => {
                    var item = <Item key={items.length} item={series} />
                    items.push(item)
                });
                this.setState({ rows: items, message: "" });
            })
            .catch(err => {
                console.log(err);
                this.setState({message: <Message message="Opps, something went wrong..." />});
            });
    }

    callApi = async () => {
        const response = await fetch('/api/series');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };


    render() {
        return (
            <div>
                <PageTitle title="Popular Series" />
                <Grid>
                    <Row className="show-grid">
                        {this.state.message}
                        {this.state.rows}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Series