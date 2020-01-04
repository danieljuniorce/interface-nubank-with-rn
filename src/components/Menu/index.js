import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  QRCodeTemporario,
  Nav,
  NavItem,
  NavText,
  SingOutButton,
  SingOutButtonText,
} from './styled';

import qrcode from '../../assets/qrcode.png';

export default function Menu({ translationY }) {
  return (
    <Container
      style={{
        opacity: translationY.interpolate({
          inputRange: [0, 200],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCodeTemporario source={qrcode} />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações</NavText>
        </NavItem>
      </Nav>

      <SingOutButton onPress={() => {}}>
        <SingOutButtonText>Sair</SingOutButtonText>
      </SingOutButton>
    </Container>
  );
}
