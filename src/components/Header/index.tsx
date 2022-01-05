import React from 'react';
import { Container, Title } from './styles';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
