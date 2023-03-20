import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import { ProjectList } from '../helpers/ProjectList';
import { useParams } from 'react-router-dom';
import '../style/ProjectDisplay.css'

const ProjectDisplay = () => {
    const { id } = useParams()
    const project = ProjectList[id]
    
    
  return (
      <div className="project">
          <h1> {project.name}</h1>
          <img src={project.image} />
          <p>
              <a href={project.liveLink} target='_blank'>Live Project Link</a>
          </p>
          <p>
              <b>Skills:</b> {project.skills}
          </p>  
          
          <a href={project.githubLink} target='_blank'>
              
          <GitHubIcon />
          </a>
      </div>
  )
}

export default ProjectDisplay