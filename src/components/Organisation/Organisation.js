import React from "react";
import { Col,Image,Row} from "react-bootstrap";
import { useOrganisation } from "../../hooks/useOrganisation";

const Organisation = ({id}) => {
  const {org } = useOrganisation(id);

  return (
    org.length !== 0 && (<Col>
      <div className="font_xs ml-4 pt-2 mb-2">
        <strong>ORGANISATIONS</strong>{" "}
      </div>
      <Row className="my-4" sm={8} >
            {org.map((element,index) => 
                (<Col key={index}>
                    <div className="d-flex justify-content-center">
                      <Image src={element.avatar_url || ''} width="25cm" roundedCircle />
                    </div>
                    <div className="text-center font_xxs my-2">{element.login.charAt(0).toUpperCase() + element.login.slice(1)}</div>
                </Col>)
            )}
      </Row>
    </Col>)
  );
};

export default Organisation;
