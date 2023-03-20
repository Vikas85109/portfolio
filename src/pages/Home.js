import React from 'react'
import '../style/Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
      <div className='home'>
          <div className="about">
              <h2>Hi, My Name is Vikas Sharma</h2>
              <div className="prompt">
                  <p>
                      A softwere developer with a passion for learning and creating
                  </p>
                  <a href="https://www.linkedin.com/in/vikas-sharma-4bb27418a/" target="_blank">
                      
                  <LinkedInIcon />
                  </a>
                  <EmailIcon />
                  <a href="https://github.com/Vikas85109" target='_blank'>
                      
                  <GitHubIcon/>
                  </a>
              </div>
          </div>
          <div className="skills">
              <h1>Skills</h1>
              <ol className='list'>
                  <li className='item'>
                      <h2>Front-End</h2>
                      <span>
                          ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Ant Design 
                      </span>
                  </li>

                  <li className='item'>
                      <h2>Back-End</h2>
                      <span>
                          NodeJS, ExpressJS, MySQL, MongoDB
                      </span>
                  </li>

                  <li className='item'>
                      <h2>Languages</h2>
                      <span>
                          Javascript, Java, C, C++
                      </span>
                  </li>
              </ol>
          </div>
    </div>
  )
}

export default Home