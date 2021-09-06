import React from "react";
import { Col, Container,Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Header from "../Header/header";
import Language from "../Languages/Language";
import Organisation from '../Organisation/Organisation'
import Projects from "../Projects/Projects";

const CV=() => {
    const {id} = useParams();
    const {data} = useData(id)
    
    return(
        data && <Container fluid className="my-3">
            <Header data={data}/>
            <Row>
                <Col>
                    <Language id={id}/>
                    <Organisation id={id}/>
                </Col>
                <Col>
                    <Projects id={id}/>
                </Col>
            </Row>            
        </Container>
    )
}


export default CV;