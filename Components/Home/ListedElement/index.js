import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { JobContainer,
         JobImage,
         JobInfoContainer,
         CompanyContainer,
         CompanyInfoContainer,
         DataPresentation,
         DataResponse,
         TitleContainer,
         TitleElement } from './styles'

export default function ListedElement( {data} ){
    const navigator = useNavigation()

    function navigateToJobDescription(data){
        navigator.navigate('JobDescription', {data})
    }
    
    return(
        <JobContainer onPress={()=> navigateToJobDescription(data)}>
            
            <JobImage source={data.item.company_logo != null ? {uri: data.item.company_logo} : {uri: "https://avatars1.githubusercontent.com/u/9919?s=200&v=4" }}/>
        
            <JobInfoContainer>
                <TitleContainer>
                    <TitleElement>{data.item.title}</TitleElement>
                </TitleContainer>

                <CompanyContainer>
                    <CompanyInfoContainer>
                        <DataPresentation>Empresa: </DataPresentation>
                        <DataResponse>{data.item.company}</DataResponse>
                    </CompanyInfoContainer>
                    <CompanyInfoContainer>
                        <DataPresentation>Localização: </DataPresentation>
                        <DataResponse>{data.item.location}</DataResponse>
                    </CompanyInfoContainer>
                </CompanyContainer>
            </JobInfoContainer>
        
        </JobContainer>
        )
}