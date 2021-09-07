import React from "react";
import { Col,Image,Row} from "react-bootstrap";
import { useOrganisation } from "../../hooks/useOrganisation";

const Organisation = ({id}) => {
  const {org } = useOrganisation(id);

  return (
    org.length !== 0 && (<Col>
      <div className="font_m mb-3">
        ORGANISATIONS{" "}
      </div>
      <Col className="my-4 px-0" sm={8} >
            {org.map((element,index) => 
                (<Row key={index}>
                    <Col md="5"className='pb-3'> 
                    {/* <Col className="d-flex justify-content-center"> */}
                      <Image src={element.avatar_url || ''} width="40" height="40" roundedCircle />
                    </Col>
                    <Col className=" my-2">{element.login.charAt(0).toUpperCase() + element.login.slice(1)}</Col>
                </Row>)
            )}
      </Col>
    </Col>)
  );
};

export default Organisation;
