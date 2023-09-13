import React from "react";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

export default function Footer() {
  return (
    <div>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
      </Container>

      <Flex>
        <ul>
          <li>lorem ipsum</li>
          <li>+1-543-123-5943</li>
          <li>example@huddle.com</li>
        </ul>

        <ul>
          <li>About us</li>
          <li>What we do</li>
          <li>FAQ</li>
        </ul>

        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>

        {/* Social icons */}
      </Flex>
    </div>
  )
}
