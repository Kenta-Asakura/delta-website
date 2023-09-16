import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/Socialicons.styled'

export default function SocialIcons() {
  return (
    <StyledSocialIcons>

      <li>
        <a href='https://twitter.com/?' target='_blank'>
          <FaTwitter />
        </a>
        <a href='https://www.facebook.com/' target='_blank'>
          <FaFacebook />
        </a>
        <a href='https://www.linkedin.com/' target='_blank'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}
