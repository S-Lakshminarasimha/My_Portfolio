import React from 'react'
import './About.css'
import timeline from './timeline-bar.png'

import Course from './course/Course'

function About() {

const info =`Hey , I'm Lakshmi Narasimha,

I'm an undergraduate student completed my graduation 
in bachelor of technology in the field of Computer Science Engineering.

Learning about emerging technologies is a passion of mine, 
and I'm always eager to expand my skillset.

I consider self-learning to be one of my greatest strengths.

My current learning goals include becoming proficient in the MERN stack.
`

  return (
    <div className='about'id='about' >
        <div className='about_content'>
            <div className='self_info'>
                <div className='title'>
                    <h1>ABOUT ME</h1>
                    <span className='bar'></span>
                </div>
                <div className='info'>
                <pre>{info}</pre> 
                </div>
            </div>

            <div className='edu_info'>
                <img src={timeline} alt="" className='timeline-bar' />

                <Course course ="ug" year="2023" course_title="B.TECH" branch="COMPUTER SCIENCE" gpa="7.74"/>
                <Course course ="inter" year="2019" course_title="INTERMEDIATE" branch="MATHS, PHYSICS & CHEMISTRY" gpa="9.67"/>
                <Course course ="ssc" year="2017" course_title="SSC" gpa="10.0"/>


            </div>
        </div>
    </div>
  )
}

export default About