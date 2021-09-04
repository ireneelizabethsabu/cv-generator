import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";

const Language = () => {
  // const [skills, setSkills] = useState();
  const skills = [
      { lang: "JavaScript", percent: 60 },
      { lang: "HTML", percent: 90 },
      { lang: "CSS", percent: 50 },
      { lang: "C++", percent: 30 },
      { lang: "C", percent: 50 },
    ]

  return (
    <Col xs={6}>
      <div className="font_m mb-3">SKILLS</div>
      {skills.map((skill, index) => (
        <Row key={index}>
          <Col xs="4" className="text-right">
            {skill.lang}
          </Col>
          <Col>
            <ProgressBar variant="info" now={skill.percent} />
          </Col>
        </Row>
      ))}
    </Col>
  );
};

export default Language;
