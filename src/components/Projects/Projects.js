import React, { useState, useEffect } from "react";
import {Image,Row,Col, Container} from 'react-bootstrap';
import { getRepos } from "../../api";
import './Projects.css';

const Projects = ({id}) => {
    const [repo,setRepo] = useState(null) 
    useEffect(() => {
        getRepos(id).then(res => {
            setRepo(res)
            console.log(res)
        }).catch(err => console.log(err))
    }, [id])
    return(
        <>
        {repo && <Col xs={6}>
        <div className="font_m mb-3">PROJECTS</div>
        <Row>
            <Col className="d-flex pt-2 px-0" >
            <Image  className='icon' src='https://source.unsplash.com/user/c_v_r' roundedCircle/>
            {/* </Col>
            <Col > */}
            {repo[0] && <div className='font_s'> 
                {repo[0].name || 'Repo-1'}
            </div> }
            </Col>
        </Row> 
        {repo[0] && repo[0].homepage && <a className ="font_s" href = {repo[0].homepage}> Project Link</a>}
        {repo[0] && repo[0].lang && <p className='font_m'>Tech Stack : {repo[0].lang} </p> } 
        {/* <Image src='https://source.unsplash.com/user/c_v_r'roundedCircle className='icon'/>
        <div className='font-l'>
            {repo[1].name}
        </div>
        <p className='font-m'>{repo[1].lang}</p>
        <Image src='https://source.unsplash.com/user/c_v_r' roundedCircle className='icon'/>
        <div className='font-l'>
            {repo[2].name}
        </div>
        <p className='font-m'>Tech Stack : {repo[2].lang}</p> */}
        </Col> }
        </>
    )  
}

export default Projects;

