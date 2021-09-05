import React,{useState,useEffect} from "react";
import { Col, Container,Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUsers } from "../../api";
import Header from "../Header/header";
import Language from "../Languages/Language";
import Organisation from '../Organisation/Organisation'
import Projects from "../Projects/Projects";

const CV=() => {
    const [data, setData] = useState(null)
    const {id} = useParams();
    
    useEffect(() => {
        getUsers(id).then(res => {
            setData(res.data)
            console.log(res.data)
        }).catch(err => console.log(err))
        
    }, [id])
    
    return(
        data && <Container fluid className="my-3">
            <Header data={data}/>
            <Row>
                <Col>
                    <Organisation id={id}/>
                    <Language id={id}/>
                </Col>
                <Col>
                    <Projects id={id}/>
                </Col>
            </Row>            
        </Container>
    )
}


export default CV;