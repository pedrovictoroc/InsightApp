import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Login from './Components/Login'

import { Container } from './global'

export default function App() {
  return (
    <Container>
      <Login/>
    </Container>
    );
}