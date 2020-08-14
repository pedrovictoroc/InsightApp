import React, { useState, useEffect } from 'react';

import * as Fonts from 'expo-font'
import { Poppins_400Regular } from '@expo-google-fonts/poppins'

import Login from './Components/Login'
import Home from './Components/Home'

import { Container, LoadingText } from './global'

export default function App() {
  let [fontsLoaded] = Fonts.useFonts({
    Poppins: Poppins_400Regular,
  });

  if(!fontsLoaded){
    return (
      <Container>
        <LoadingText>Carregando...</LoadingText>
      </Container>
    )
  }else{
    return (    
      <Container>
        <Home/>
      </Container>
      );
  }
}