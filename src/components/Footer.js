import React from 'react'
import '../style/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
      <div className='footer'>
      <div className="socialMedia">
        
        <a href="https://www.instagram.com/itsvikasharma/" target='_blank'>
          <InstagramIcon />
        </a>

       
        <a href="https://twitter.com/vikassharma8511" target='_blank'>
          <TwitterIcon />
        </a>
       
        <a href="https://www.facebook.com/profile.php?id=100007749306236" target='_blank'>
          <FacebookIcon />
        </a>
        
        <a href="https://www.linkedin.com/in/vikas-sharma-4bb27418a/" target="_blank">
          <LinkedInIcon />
          </a>
          </div>
          <p>&copy; 2023 vikas Portfolio</p>
    </div>
  )
}

export default Footer