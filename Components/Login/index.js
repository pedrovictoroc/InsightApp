import React from 'react'

import { LoginText,
         Container,
         InputName,
         Input } from './styles.js'

export default function Login(){
    return(
        <>
            <LoginText>Login</LoginText>
            
            <Container>
                <InputName>Email</InputName>
                <Input/>
                <InputName>Password</InputName>
                <Input/>    
            </Container>
        </>
    )
}