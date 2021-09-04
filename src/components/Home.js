import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/header";
import Language from "./Languages/Language";

export const Home = () => {
    return(
        <Container fluid>
            <Header/>
            <Language/>
        </Container>
    );
}

export default Home;