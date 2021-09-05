import React,{useState} from "react";
import { Col, Row } from "react-bootstrap";

const Language = () => {
  const [skills, setSkills] = useState(['java','javascript','obj','ruby','c++','html','vue','typescript','coffeescript','php']);

  return (
    <Col>
      <div className="font_m mb-3">SKILLS</div>
      <Row >
      {skills && skills.map((skill, index) => (
          <Col key={index}>
            <img src={`/${skill}.svg`} alt="skill-badge"/>
          </Col>
      ))}
      </Row>
    </Col>
  );
};

export default Language;
