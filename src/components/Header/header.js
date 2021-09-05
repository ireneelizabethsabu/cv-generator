import React from 'react';
import { Jumbotron,Row,Col,Image } from 'react-bootstrap';
import "./header.css";
import {ReactComponent as Link} from '../../assets/link.svg'
//import {ReactComponent as Gmail} from '../../assets/gmail.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Github} from '../../assets/github.svg'

const Header = ({data}) => {
    const showimage = data;
    return (
        data && <Jumbotron className="px-5">
            <Row >
                {data && <span className="mx-3">
                    <Image src={data.avatar_url || ''} width="180px" height="171px" roundedCircle />
                </span> }
                <Col >
                    <div className={`${showimage === null ? 'text-center' : '' }
                    font_xxl mx-1 `}>{data.name || data.login}</div>
                    <Col className={`${showimage === null ? 'justify-content-center' : '' }
                    d-flex pt-2 px-0`}>
                        {data.twitter_username && <span className="mx-1"><Twitter/>{data.twitter_username}</span>}
                        <a href={data.html_url || '#'}><span className="mx-1"><Github/></span></a>
                        {data.blog && <a href={`https://${data.blog || `#`}`}><span className="mx-1"><Link/></span></a>}
                        {data.location && <span className="mx-1"><Location/> {data.location} </span>}
                    </Col>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Header;