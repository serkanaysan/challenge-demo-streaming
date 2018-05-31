import React from 'react';
import { Col } from 'react-bootstrap';

class Item extends React.Component {
    render() {
        return (
            <Col xs={12} sm={3} md={2} className="col-detailitem">
                <div className="detailitem">
                    <img alt="" src={this.props.item.images.posterArt.url} />
                    <p>{this.props.item.title}</p>
                </div>
            </Col>
        )
    }
}

export default Item