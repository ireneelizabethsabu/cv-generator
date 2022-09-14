import React from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";
import { usePercent } from "../../hooks/usePercent";
import { maxPercent } from "../../api/index";
import "./Language.css";

const Language = ({ id }) => {
  const { skills, total } = usePercent(id);

  return (
    <Col className="mb-4 pr-0 pl-5">
      <div className=" font_xs mb-3"><strong>SKILLS</strong></div>
      <Col className="px-0 font_xxs">
        {skills.length !== 0 &&
          Object.keys(skills)
            .filter(
              (key) => Math.round((skills[key].percent * 100) / total) > 0
            )
            .map((key) => (
              <Row key={key} className=" my-3">
                <Col xs="3">
                  <div className="text-left"> {skills[key].lang} </div>
                </Col>
                <Col>
                  <ProgressBar className="pbar"
                    now={Math.round((skills[key].percent * 100) / total)}
                    max={Math.round((maxPercent(skills) * 100) / total)}
                  />
                </Col>
              </Row>
            ))}
      </Col>
    </Col>
  );
};

export default Language;
