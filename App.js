import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as Font from 'expo-font'

import Login from './Components/Login'

import { Container } from './global'

export default function App() {
  const [loaded] = Font.useFonts({Poppins: require('./assets/fonts/Poppins-Regular.ttf')});
  
  return (
    
    <Container>
      <Login/>
    </Container>
    );
}