import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { usePercent } from '../../hooks/usePercent'
import {maxPercent} from '../../api/index'
const Language = ({ id }) => {
  const {skills,total} = usePercent(id); 
  
  return (
    <Col>
      <div className='font_m mb-3'>SKILLS</div>
      <Col>
        {skills.length!==0 && Object.keys(skills).map(key => (
          <Row key={key}>
            
            <Col md="4">
            <div> {skills[key].lang} </div></Col>
            {/* <img src={`/${skill}.svg`} alt="skill-badge"/> */}
            <Col md="5">
            <ProgressBar 
            now={Math.round(skills[key].percent*100/total) }
            max={Math.round(maxPercent(skills)*100/total)}/>
            </Col>
            {/* max={Math.round(max*100/total)}/> */}
          </Row>
        ))}
      </Col>
    </Col>
  )
}

export default Language
