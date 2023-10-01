import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/Socialicons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>

      <li>
        <a href='https://twitter.com/?' target='_blank'  rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href='https://www.facebook.com/' target='_blank'  rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href='https://www.linkedin.com/' target='_blank'  rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
