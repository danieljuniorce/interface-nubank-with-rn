import React from 'react';

import { Container, Top, Logo, Title } from './styled';

import logo from '../../assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Daniel Jr</Title>
      </Top>
    </Container>
  );
}
