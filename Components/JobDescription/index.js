import React, {useState, useEffect} from 'react'

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

import { Container } from '../../global'

import { FirstLogoText, SecondLogoText } from '../Login/styles'

import { JobHubHeader,
         GoBackButton,
         LogoContainer,
         JobDescriptionContainer,
         JobGeneralInfoContainer,
         CompanyImageContainer,
         ComapanyImage,
         CompanyTextInfo,
         CompanyTitleContainer,
         CompanyTitle,
         CompanyData,
         CompanyResponse,
         CompanyWrapper,
         CompanyDescriptionTextContainer,
         CompanyDescriptionText } from './styles'

export default function JobDescription(){

    const route = useRoute();

    const data = route.params.data

    return(
        <Container>
            <JobHubHeader>
                <GoBackButton>
                    <MaterialIcons name="keyboard-return" size={40}/>
                </GoBackButton>
                <LogoContainer>
                    <FirstLogoText>Job</FirstLogoText>
                    <SecondLogoText>Hub</SecondLogoText>
                </LogoContainer>
            </JobHubHeader>

            <JobDescriptionContainer>
                <JobGeneralInfoContainer>
                    <CompanyImageContainer>
                        <ComapanyImage source={data.item.company_logo != null ? {uri: data.item.company_logo} : {uri: "https://avatars1.githubusercontent.com/u/9919?s=200&v=4" }}/>
                    </CompanyImageContainer>
                    <CompanyTextInfo>
                        <CompanyTitleContainer>
                            <CompanyTitle>
                                {data.item.company}
                            </CompanyTitle>
                        </CompanyTitleContainer>
                        <CompanyData>
                            <CompanyResponse>{data.item.location}</CompanyResponse>
                            <CompanyResponse>{data.item.created_at}</CompanyResponse>
                            <CompanyResponse>{data.item.type}</CompanyResponse>
                        </CompanyData>
                    </CompanyTextInfo>
                </JobGeneralInfoContainer>

                <CompanyWrapper>
                    <CompanyDescriptionTextContainer>
                        <CompanyDescriptionText>
                            {data.item.description}
                        </CompanyDescriptionText>
                    </CompanyDescriptionTextContainer>
                </CompanyWrapper>
                
            </JobDescriptionContainer>
        </Container>
    )
}