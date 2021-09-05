import React,{useState,useEffect} from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getUsers ,getRepos } from "../../api";
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
            <Language id={id}/>
            <Organisation id={id}/>
            <Projects id={id}/>
        </Container>
    )
}


export default CV;