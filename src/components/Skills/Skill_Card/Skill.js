import React from 'react'
import './Skill.css'
function Skill({skill_info}) {
  return (
    <div className='skill-card'>
        {skill_info.icon}
        <p>{skill_info.name}</p>
    </div>
  )
}

export default Skill