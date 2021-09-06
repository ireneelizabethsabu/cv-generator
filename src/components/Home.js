import React, {  useState } from "react";
import {Button, Form,Row,Col, Container} from 'react-bootstrap';
import './Home.css';
import { useHistory } from "react-router-dom";
import octocat from '../assets/octocat.png';

export const Home = () => {
    const [id,setId]=useState('');
    const history =  useHistory();
    const handleChange =(e) => {
        setId(e.target.value);
    }
   
    return(
        <Container fluid className="min-vh-100 home-container">
            
            <Row className="home-row justify-content-center">
                <Col className="left pr-0 d-none d-lg-block d-flex justify-content-center">
                    <img src={octocat} width="500px" alt="pic"/>
                </Col>
                <Col className="text-center right pl-0">
                <h1 >CV-GENERATOR</h1>
                <p className="title gradient-font">
                    Generates CV Based on Github Profile 
                </p>
                <Col className="d-flex justify-content-center">
                <Form style={{width: "300px"}} >
                    <Form.Control 
                        className="username text-center mt-5" 
                        type="username" 
                        placeholder="Enter github username" 
                        value={id} 
                        onChange={handleChange} required/>
                    
                    {/* <Form.Group>
                        <Form.Check type="checkbox" label="Include github avatar"/>
                    </Form.Group> */}
                    <Button variant="outline-dark gradient-font generate-btn my-4" type="submit" onClick={() => { history.push(`/cv/${id}`)}}>
                        Generate CV
                    </Button>
                </Form>
                </Col>
                </Col>   
            </Row>
        </Container>
    );
}

export default Home;