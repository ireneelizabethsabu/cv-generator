import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { langPercent } from '../../api/utils'

const Language = ({ id }) => {
  const [skills, setSkills] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    langPercent(id).then(res => {
      setSkills(res)
    })
    Object.keys(skills).map(key => setTotal(total + skills[key].percent))
    Object.keys(skills).map(
      key =>
        (skills[key].percent = Math.round((skills[key].percent * 100) / total))
    )
  }, [id])
  
  return (
    <Col>
      <div className='font_m mb-3'>SKILLS</div>
      <Row>
        {skills.length!==0 && Object.keys(skills).map(key => (
          <Col key={key}>
            <div> {skills[key].lang}</div>
            {/* <img src={`/${skill}.svg`} alt="skill-badge"/> */}
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default Language
