import React from 'react'
import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader bg='red'>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg'></Logo>
          <Button>Try It Free</Button>
        </Nav>
        <h1>Hubble</h1>
      </Container>
    </StyledHeader>
  )
}
