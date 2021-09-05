import React,{useState,useEffect} from "react";
import { Col,Image,Row} from "react-bootstrap";
import { getOrganisation } from "../../api";
//import 'react-vertical-timeline-component/style.min.css';


const Organisation = ({id}) => {
  const [org, setOrg] = useState(null)

  useEffect(() => {
    getOrganisation(id).then(res => {
        console.log(res.data)
        setOrg(res.data)
    }).catch(err => console.log(err))
  }, [id])

  return (
    <Col>
      <div className="font_m mb-3">
        ORGANISATIONS{" "}
      </div>
      <Row className="my-4" sm={8} >
            {org && (org.map((element,index) => 
                <Col key={index}>
                    <div className="d-flex justify-content-center">
                      <Image src={element.avatar_url || ''} width="50" height="50" roundedCircle />
                    </div>
                    <div className="text-center my-2">{element.login.charAt(0).toUpperCase() + element.login.slice(1)}</div>
                </Col>
            ))}
        </Row>
    </Col>
  );
};

export default Organisation;
