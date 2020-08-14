import React from 'react'

import { LogoContainer,
         FirstLogoText,
         SecondLogoText } from '../Login/styles'

export default function Home(){
    return(
        <>
            <LogoContainer>
                <FirstLogoText>Job</FirstLogoText>
                <SecondLogoText>Hub</SecondLogoText>
            </LogoContainer>
        </>
    )
}