import React, { useState, useEffect } from 'react';

import * as Fonts from 'expo-font'
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import Routes from './Components/Routes'

import { Container, LoadingText } from './global'

export default function App() {
  let [fontsLoaded] = Fonts.useFonts({
    Poppins: Poppins_400Regular,
    Poppins: Poppins_600SemiBold,
  });

  if(!fontsLoaded){
    return (
      <Container>
        <LoadingText>Carregando...</LoadingText>
      </Container>
    )
  }else{
    return (
        <Routes/>
    );
  }
}