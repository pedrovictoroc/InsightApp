import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import { Container } from '../../global'

import { JobHubHeader,
    GoBackButton,
    LogoContainer, } from '../JobDescription/styles'

import { FirstLogoText, SecondLogoText } from '../Login/styles'

import { HowItWorksContainer,
         HowItWorksTitle,
         HowItWorksSubTitle,
         HowItWorksStepContainer,
         HowItWorksStepTitle,
         HowItWorksStepImage,
         HowItWorksText } from './styles'

         
export default function HowItWorks(){
    
    const navigator = useNavigation()

    function navigateToHome(){
        navigator.goBack()
    }

    return(
        <Container>
            <JobHubHeader>
                <GoBackButton onPress={()=> navigateToHome()}>
                    <MaterialIcons name="keyboard-return" size={40}/>
                </GoBackButton>
                <LogoContainer>
                    <FirstLogoText>Job</FirstLogoText>
                    <SecondLogoText>Hub</SecondLogoText>
                </LogoContainer>
            </JobHubHeader>

            <HowItWorksContainer>
                <HowItWorksTitle>Como o GitHub Jobs funciona?</HowItWorksTitle>
                <HowItWorksSubTitle>
                    GitHub Jobs é o local perfeito para achar o talento certo para sua empresa, veja como:
                </HowItWorksSubTitle>

                <HowItWorksStepContainer>
                    
                    <HowItWorksStepTitle>1) Crie e monitore suas publicações</HowItWorksStepTitle>
                    <HowItWorksStepImage source={{uri: "https://jobs.github.com/images/modules/faq/screenshot-editor.jpg"}}/>
                    <HowItWorksText>
                        Veja exatamente como sua publicação está antes de publicar. Antes de criar uma publicação
                        você precisará fazer login com sua conta GitHub e verificar a criação da conta.
                    </HowItWorksText>

                    <HowItWorksStepTitle>2) Pague com um cartão de crédito!</HowItWorksStepTitle>
                    <HowItWorksText>
                        Faturamento disponível mediante solicitação para pedidos em massa.
                         Email jobs@github.com para mais informações.
                          Desculpe, não há agências de recrutamento.
                    </HowItWorksText>

                    <HowItWorksStepTitle>3) Sua publicação é imediatamente postada</HowItWorksStepTitle>
                    <HowItWorksStepImage source={{uri: "https://jobs.github.com/images/modules/faq/screenshot-listing.jpg"}}/>
                    <HowItWorksText>
                        Publicações ficam no ar por 30 dias. O GitHub Jobs enviará um recibo e um link para
                        que você possa alterar sua publicação.
                    </HowItWorksText>

                </HowItWorksStepContainer>
                
            </HowItWorksContainer>
        </Container>
        
    )
}