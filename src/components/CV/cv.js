import React from "react";
import { Col, Container,Row,Button,Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";
import Header from "../Header/header";
import Language from "../Languages/Language";
import Organisation from '../Organisation/Organisation'
import Projects from "../Projects/Projects";
import picon from "../../assets/printer.svg"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./cv.css"

const CV=() => {
    const {id} = useParams();
    const {data} = useData(id)

    const createPDF = async () => {   
        const pdf = new jsPDF("portrait", "pt", "a4"); 
        html2canvas(document.querySelector("#pdf"), {useCORS: true}).then(function(data) {
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("resume.pdf");
        console.log("hii");
        })
      };
    
    return(
        data && (<Container className="ml-5 my-4">
            
            
            <Row  >
                <Col className="resume">
                    <div id="pdf">
                        <Header data={data}/>
                        <Row >
                        <Col >
                            <Language id={id}/>
                            <Organisation id={id}/>
                        </Col>
                        <Col>
                            <Projects id={id}/>
                        </Col>
                        </Row>
                    
                     </div>
                </Col>
                <Col>
                    <Button variant=" " onClick={createPDF} type="button" > 
                    <Image
                    className="ptr-button" 
                src={picon}
                width="30px"
                height="31px"
                />
                    </Button>
                </Col>
          
            </Row>          
        </Container>)
    )
}


export default CV;