import React, {  useState } from "react";
import {Button, Form,Row,Col, Container} from 'react-bootstrap';
import './Home.css';
import { useHistory } from "react-router-dom";

export const Home = () => {
    const [id,setId]=useState('');
    const history =  useHistory();
    const handleChange =(e) => {
        setId(e.target.value);
    } 
    
    return(
        <Container fluid >
            <Row xs={1} sm={1} md={2} className="home-row">
                <Col className="text-center">
                <h1 className="title">Get your customized cv with <br /><span id="head">CV-GENERATOR</span></h1>
                <p className="lead">
                    Generates CV Based on Github Profile 
                </p>
                </Col>

                <Col md={4} className="d-flex justify-content-center">
                <Form>
                    <Form.Group>
                        <Form.Label className="text-center"> Enter Github user id</Form.Label>
                        <Form.Control className="id" type="username" placeholder="user-id" value={id} onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Include additional details" />
                    </Form.Group>
                    <Button variant="outline-dark" type="submit" onClick={() => { history.push(`/cv/${id}`)}}>
                        Generate CV
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;