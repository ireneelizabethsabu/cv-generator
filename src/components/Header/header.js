import React from 'react';
import { Jumbotron,Row,Col,Image } from 'react-bootstrap';
import "./header.css";
import {ReactComponent as Link} from '../../assets/link.svg'
//import {ReactComponent as Gmail} from '../../assets/gmail.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import {ReactComponent as Location} from '../../assets/location.svg'
import {ReactComponent as Github} from '../../assets/github.svg'

const Header = () => {
    const showimage = 'https://source.unsplash.com/user/c_v_r'

    return (
        <Jumbotron className="px-5">
            <Row >
                {showimage && <span className="mx-3">
                    <Image src={showimage} width="180px" height="171px" roundedCircle />
                </span> }
                <Col >
                    <div className={`${showimage === null ? 'text-center' : '' }
                    font_xxl mx-1 `}>NAME IN CAPITALS</div>
                    <Col className={`${showimage === null ? 'justify-content-center' : '' }
                    d-flex pt-2 `}>
                        <span className="mx-1"><Twitter/></span>
                        <span className="mx-1"><Github/></span>
                        <span className="mx-1"><Link/></span>
                        <span className="mx-1"><Location/> Some place </span>
                    </Col>
                </Col>
            </Row>
        </Jumbotron>
    );
}

export default Header;