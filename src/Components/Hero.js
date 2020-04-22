import React from 'react';

//#region Bootstrap Depencies
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//#endregion

import { Helmet } from 'react-helmet'


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">

        <Helmet>
        <title>{props.title}</title>
        </Helmet>

            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2>}
                        {props.text && <h3 className="lead font-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;