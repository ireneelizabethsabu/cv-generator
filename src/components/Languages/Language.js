import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'
import { usePercent } from '../../hooks/usePercent'

const Language = ({ id }) => {
  const {skills,total,max} = usePercent(id); 
  
  return (
    <Col>
      <div className='font_m mb-3'>SKILLS</div>
      <Row>
        {skills.length!==0 && Object.keys(skills).map(key => (
          <Col key={key}>
            <div> {skills[key].lang} {total}</div>
            {/* <img src={`/${skill}.svg`} alt="skill-badge"/> */}
            <ProgressBar 
            now={Math.round(skills[key].percent*100/total) }
            max={max*100/total}/>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default Language
