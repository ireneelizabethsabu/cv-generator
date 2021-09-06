import React from "react";
import {Card} from 'react-bootstrap';
import './Projects.css';
import icon from '../../assets/project.png';
import { useRepo } from "../../hooks/useRepo";

const Projects = ({id}) => {
    const {repo} = useRepo(id)
    
    return(
        <>
        <div className="font_m mb-3 ml-3">PROJECTS</div>
        {repo.map((project, index) => (
            <Card key={index}>
            {/* <Card.Img variant="top" src={icon} /> */}
            <Card.Body>
              <Card.Title> <Card.Img  src={icon} /> {project.name || 'Repo-1'}</Card.Title>
              <Card.Text>
              {project.description && <div>{project.description}</div>}
              {project.homepage && <div><a  href = {project.homepage}> Project Link : {project.homepage}</a></div>}
              {project.html_url && <div><a  href = {project.html_url}> Link to Code: {project.html_url}</a></div>}
              Tech Stack : {project.language}
              </Card.Text>
            </Card.Body>
            </Card>
        ))}     
        </>
    )  
}

export default Projects;

