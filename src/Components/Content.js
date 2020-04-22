import React from 'react';

//#region Bootstrap Dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//#endregion

function Content(props) {
    return (
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                </Col>
            </Row>
        </Container>
    )
}

export default Content;