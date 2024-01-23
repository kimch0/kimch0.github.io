import { Container, Row, Col } from "react-bootstrap"

import "./Footer.css"

function Footer() {
    const fechaActual = new Date();
    const year = fechaActual.getFullYear();


    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6} >
                        <p>Copyright {year}. All Rights Reserved</p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    )
}

export default Footer