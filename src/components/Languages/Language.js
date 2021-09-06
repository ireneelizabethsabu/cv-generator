import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { usePercent } from '../../hooks/usePercent'

const Language = ({ id }) => {
  const {skills,total} = usePercent(id); 
  
  return (
    <Col>
      <div className='font_m mb-3'>SKILLS</div>
      <Row>
        {skills.length!==0 && Object.keys(skills).map(key => (
          <Col key={key}>
            <div> {skills[key].lang} {total}</div>
            {/* <img src={`/${skill}.svg`} alt="skill-badge"/> */}
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default Language
