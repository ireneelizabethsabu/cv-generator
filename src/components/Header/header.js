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
  const imgstyle = {
    color: "#fff",
    width: "0.35cm",

  }

  return (
    data && (
      <Jumbotron className="px-4 pt-3" style={{ backgroundColor: "#000000", width: "18cm", height: "3cm" }}>
        <Row>
          <span className="mx-4 mt-2">
            <Image
              src={data.avatar_url || ""}
              width="70px"
              height="61px"
              roundedCircle
            />
          </span>

          <Col>
            <Row>
              <div className={`font_m mt-2 ml-2 mb-1 text-color ${data.avatar_url === null ? "text-center" : ""}`}
                style={style} >
                {data.name || data.login}
              </div>
            </Row>
            <Row>
                {data.login && (
                  <span className="ml-2 font_xs" style={style}>
                    <Github style={imgstyle} />
                    <span className="ml-2">{data.login}</span>
                  </span>
                )}
              
                {data.twitter_username && (
                  <span className="ml-1 font_xs " style={style}>
                    <Twitter style={imgstyle}  />
                    <span className="ml-2">{data.twitter_username}</span>
                  </span>
                )}

                {data.blog && (
                  <span className=" font_xs" style={style}>
                    <Link style={imgstyle} />
                    <span className="ml-2">{data.blog}</span>
                  </span>
                )}
                {data.location && (
                  <span className=" ml-2 font_xs" style={style}>
                    <Location style={imgstyle} /><span > {data.location}{" "}</span>
                  </span>
                )}
            </Row>
          </Col>
        </Row>
      </Jumbotron>
    )
  );
};

export default Header;
