import React from "react";
import { Col} from "react-bootstrap";

const Organisation = () => {
  const org = [];

  return (
    <Col>
      <div className="font_m mb-3">
        ORGANISATIONS{" "}
      </div>
      <Col className="my-4">
            {org && (org.map((element,index) => 
                <Col key={index}>
                    <div className="font_m">{element.org}</div>
                </Col>
            ))}
        </Col>
    </Col>
  );
};

export default Organisation;
