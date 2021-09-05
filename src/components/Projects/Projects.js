import React, { useState, useEffect } from "react";
import {Image,Row,Col, Card} from 'react-bootstrap';
import { getRepos,sortByStar } from "../../api";
import './Projects.css';
import icon from '../../assets/project.png';

const Projects = ({id}) => {
    const [repo,setRepo] = useState([]) 
    useEffect(() => {
        getRepos(id).then(res => {
            let rep = res.data.sort(sortByStar)
            setRepo(rep.filter((el)=>
               {
                return el.fork === false &&
                el.language !== null
               }
            ).slice(0,5))
        }).catch(err => console.log(err))
    }, [id])

    return(
        <Col>
        <div className="font_m mb-3">PROJECTS</div>
        {repo.map((project, index) => (
            <Card key={index}>
            {/* <Card.Img variant="top" src={icon} /> */}
            <Card.Body>
              <Card.Title> <Card.Img  src={icon} /> {project.name || 'Repo-1'}</Card.Title>
              <Card.Text>
              {project.description}<br/>
              {project.homepage && <a  href = {project.homepage}> Project Link : {project.homepage}</a>}<br/>
              {project.html_url && <a  href = {project.html_url}> Link to Code: {project.html_url}</a>}<br/>
              Tech Stack : {project.language}
              </Card.Text>
            </Card.Body>
            </Card>
        ))}     
        </Col>
    )  
}

export default Projects;

