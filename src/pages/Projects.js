import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../style/Projects.css'
import { ProjectList } from '../helpers/ProjectList'

const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {
          ProjectList.map((curVal,idx) => {
            return <ProjectItem id={idx} name={curVal.name} image={curVal.image } />
          })
       }
      </div>
    </div>
  )
}

export default Projects