import React from "react";
import { Col,Image,Row} from "react-bootstrap";
import { useOrganisation } from "../../hooks/useOrganisation";

const Organisation = ({id}) => {
  const {org } = useOrganisation(id);

  return (
    org && (<Col>
      <div className="font_m mb-3">
        ORGANISATIONS{" "}
      </div>
      <Row className="my-4" sm={8} >
            {org.map((element,index) => 
                (<Col key={index}>
                    <div className="d-flex justify-content-center">
                      <Image src={element.avatar_url || ''} width="50" height="50" roundedCircle />
                    </div>
                    <div className="text-center my-2">{element.login.charAt(0).toUpperCase() + element.login.slice(1)}</div>
                </Col>)
            )}
      </Row>
    </Col>)
  );
};

export default Organisation;
