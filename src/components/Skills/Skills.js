import React from 'react'
import { FaReact,FaPython,FaJava,FaNodeJs,FaCss3Alt,FaHtml5,FaSass} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress,SiMongodb,SiMysql,SiTailwindcss } from "react-icons/si";
import './Skills.css'


import Skill from './Skill_Card/Skill';


function Skills() {

  const skills = [
                    {"id":1,"name":"REACT JS","icon":<FaReact/>},
                    {"id":2,"name":"JAVASCRIPT","icon":<IoLogoJavascript/>},
                    {"id":3,"name":"PYTHON","icon":<FaPython/>},
                    {"id":4,"name":"JAVA","icon":<FaJava/>},
                    {"id":5,"name":"EXPRESS JS","icon":<SiExpress/>},
                    {"id":6,"name":"NODE JS","icon":<FaNodeJs/>},
                    {"id":7,"name":"MONGO DB","icon":<SiMongodb/>},
                    {"id":8,"name":"MY SQL","icon":<SiMysql/>},
                    {"id":9,"name":"HTML 5","icon":<FaHtml5/>},
                    {"id":10,"name":"CSS 3","icon":<FaCss3Alt/>},
                    {"id":11,"name":"TAILWIND CSS","icon":<SiTailwindcss/>},
                    {"id":12,"name":"SASS","icon":<FaSass/>}
                ]

  return (
    <div className='skills' id='skills'>
      <div className='title'>
        <span className='bar'></span >
        <h1>SKILLS</h1>
        <span className='bar'></span>
      </div>
      <div className='skills-wrapper'>
        {
            skills.map((skill)=>{
                return <Skill key={skill.id} skill_info={skill}/>
            })
        }
      </div>
    </div>
  )
}

export default Skills