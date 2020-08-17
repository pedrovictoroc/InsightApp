import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { MaterialIcons } from '@expo/vector-icons'

import { Container } from '../../global'

import { FirstLogoText, SecondLogoText } from '../Login/styles'

import { JobHubHeader,
         GoBackButton,
         LogoContainer, } from '../JobDescription/styles'

import { ApiTutorialContainer,
         ApiTutorialHeaderText,
         ApiTutorialTextContainer,
         ApiTutorialTitleSectionContainer,
         ApiTutorialTitleSectionText,
         ApiTutorialText,
         ApiTutorialDescriptionText } from './styles'

export default function ApiPage(){
    
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
    
            <ApiTutorialContainer>

            <ApiTutorialTextContainer>

                    <ApiTutorialHeaderText>A API do GitHub Jobs</ApiTutorialHeaderText>


                    <ApiTutorialTitleSectionContainer>
                        <ApiTutorialTitleSectionText>Parametros</ApiTutorialTitleSectionText>
                    </ApiTutorialTitleSectionContainer>
                    
                    <ApiTutorialText>* description:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Ligada ao "search", pode ser usada para pesquisar termos como "python", ou "java"
                    </ApiTutorialDescriptionText>
                    
                    <ApiTutorialText>* location:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Nome de uma cidade, código ZIP ou outros termos de localização
                    </ApiTutorialDescriptionText>
                    
                    <ApiTutorialText>* lat:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Pesquisa baseada em latitude, você provavelmente desejará usar o "long" junto e, portanto, não deve enviar o "location"
                    </ApiTutorialDescriptionText>
                    
                    <ApiTutorialText>* long:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Pesquisa baseada em longitude, você provavelmente desejará usar o "lat" junto e, portanto, não deve enviar o "location"
                    </ApiTutorialDescriptionText>
                    
                    <ApiTutorialText>* full_time:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Se deseja receber apenas resultado para FullTime, envie esse parâmetro como true
                    </ApiTutorialDescriptionText>

                    <ApiTutorialTitleSectionContainer>
                        <ApiTutorialTitleSectionText>Paginação</ApiTutorialTitleSectionText>
                    </ApiTutorialTitleSectionContainer>
                    
                    <ApiTutorialText>* /positions.json:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Ao utilizar .json em sua URL básica, você receberá um array de JSON com 50 posições, este
                        é o equivalente a primeira página de dados, a página 0.
                    </ApiTutorialDescriptionText>
                    <ApiTutorialDescriptionText>
                        Para utilizar outras páginas adicione "page=yourPageNumber"
                    </ApiTutorialDescriptionText>

                    <ApiTutorialText>* /positions/ID.json:</ApiTutorialText>
                    <ApiTutorialDescriptionText>
                        Esse padrão irá retornar a vaga com devido ID em formato JSON, caso deseja consumir esta rota
                        sem markdown nos campos de retorno "description" e "how to apply" use:
                    </ApiTutorialDescriptionText>
                    <ApiTutorialDescriptionText>
                        * https://jobs.github.com/positions/21516.json
                    </ApiTutorialDescriptionText><ApiTutorialDescriptionText>
                        * https://jobs.github.com/positions/21516.json?markdown=true
                    </ApiTutorialDescriptionText>
                </ApiTutorialTextContainer>
            </ApiTutorialContainer>
        </Container>
    )
}