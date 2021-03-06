import React from 'react';

//#region Bootstrap Dependencies
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//#endregion



function Footer() {
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Updated May 2021
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made using React and React-Bootstrap
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}



export default Footer;