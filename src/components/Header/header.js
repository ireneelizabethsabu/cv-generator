import React from "react";
import { Jumbotron, Row, Col, Image } from "react-bootstrap";
import "./header.css";
import { ReactComponent as Link } from "../../assets/link.svg";
//import {ReactComponent as Gmail} from '../../assets/gmail.svg'
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as Github } from "../../assets/github.svg";

const Header = ({ data }) => {
  const style = {
    color: "#fff",
  };
  
  return (
    data && (
      <Jumbotron className="px-5 py-5" style={{ backgroundColor: "#000000" }}>
        <Row>
            <span className="mx-3 my-auto">
                <Image
                src={data.avatar_url || ""}
                width="180px"
                height="171px"
                roundedCircle
                />
            </span>
            <Col>
            <div className={`font_xxl mx-1 text-color ${data.avatar_url === null ? "text-center" : ""}`}
              style={style} >
              {data.name || data.login}
            </div>
            <Col className={`pt-2 px-0 ${data.avatar_url === null ? "justify-content-center" : ""}`}>
              {data.twitter_username && (
                <span className="my-1 " style={style}>
                  <Twitter />
                  <span className="ml-2">{data.twitter_username}</span>
                </span>
              )}
              <br/>
              <span className="my-1" style={style}>
                <Github />
                <span className="ml-2">{data.login}</span>
              </span>
              <br/>
              {data.blog && (
                  <span className="my-1" style={style}>
                    <Link />
                    <span className="ml-2">{data.blog}</span>
                  </span>
              )}
              <br/>
              {data.location && (
                <span className="my-1" style={style}>
                  <Location /><span className="ml-2"> {data.location}{" "}</span>
                </span>
              )}
            </Col>
          </Col>
        </Row>
      </Jumbotron>
    )
  );
};

export default Header;
