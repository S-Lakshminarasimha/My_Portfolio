import React from 'react'
import my_projects from './projects.json'
import './Projects.css'
function Projects() {
  return (
    <div className='projects' id='projects'>
        <div className='title'>
            <span className='bar'></span >
            <h1>PROJECTS</h1>
            <span className='bar'></span>
        </div>
        <div className='projects-wrapper'>
            {
                my_projects.projects.map((project)=>{
                    return (
                        <a href={project.url} className='project' key={project.id} target='_blank' rel='noopener noreferrer'>
                            <div className='project-card-front'>
                                <img src={project.imageLink} alt="" />
                                <div className='project-name'>{project.name}</div>
                            </div>
                            <div className='project-card-back'>

                            </div>
                        </a>
                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects