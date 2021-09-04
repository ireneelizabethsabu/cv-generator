import React from "react";
import {Button, Form,Row,Col, Container} from 'react-bootstrap';
import './Home.css';

export const Home = () => {
    return(
        <Container fluid className="min-vh-100 ">
            <Row xs={1} sm={1} md={2} >
                <Col className="text-center">
                <h1 className="title">Get your customized cv with <br /><span id="head">CV-GENERATOR</span></h1>
                <p className="lead">
                    Generates CV Based on Github Profile 
                </p>
                </Col>

                <Col md={3} className="d-flex justify-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label className="text-center"> Enter Github user id</Form.Label>
                        <Form.Control  type="username" placeholder="user-id" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Include additional details" />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" >
                        Generate CV
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;