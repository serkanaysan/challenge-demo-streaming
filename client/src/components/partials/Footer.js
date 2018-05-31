import React from 'react';
import { NavLink } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap';


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={12}>
                            <div>
                                <ul className="footer-nav">
                                    <li><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/">Terms and Conditions</NavLink></li>
                                    <li><NavLink to="/">Privacy Policy</NavLink></li>
                                    <li><NavLink to="/">Collection Statement</NavLink></li>
                                    <li><NavLink to="/">Help</NavLink></li>
                                    <li><NavLink to="/">Manage Account</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} md={12} className="copyright">
                            Copyright © 2016 DEMO Streaming All Rights Reserved.
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={12} sm={6} md={6}>
                            <ul className="footer-social">
                                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img alt="Facebook" src="assets/social/facebook-white.svg" /></a></li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img alt="Twitter" src="assets/social/twitter-white.svg" /></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src="assets/social/instagram-white.svg" /></a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={6}>
                            <ul className="footer-store">
                                <li><a href="https://itunes.apple.com/tr/genre/ios/id36?mt=8" target="_blank" rel="noopener noreferrer"><img alt="App Store" src="assets/store/app-store.svg" /></a></li>
                                <li><a href="https://play.google.com/store/apps?hl=tr" target="_blank" rel="noopener noreferrer"><img alt="Play Store" src="assets/store/play-store.svg" /></a></li>
                                <li><a href="https://www.microsoft.com/tr-tr/store/appsvnext/windows" target="_blank" rel="noopener noreferrer"><img alt="Windows Store" src="assets/store/windows-store.svg" /></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}

export default Footer