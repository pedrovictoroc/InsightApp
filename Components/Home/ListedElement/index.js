import React from 'react'

import { JobContainer,
         JobImage,
         JobInfoContainer,
         CompanyContainer,
         CompanyInfoContainer,
         DataPresentation,
         DataResponse,
         TitleContainer,
         TitleElement } from './styles'

export default function ListedElement( {item} ){
    return(
        <JobContainer>
            
            <JobImage source={item.company_logo != null ? {uri: item.company_logo} : {uri: "https://avatars1.githubusercontent.com/u/9919?s=200&v=4" }}/>
        
            <JobInfoContainer>
                <TitleContainer>
                    <TitleElement>{item.title}</TitleElement>
                </TitleContainer>

                <CompanyContainer>
                    <CompanyInfoContainer>
                        <DataPresentation>Empresa: </DataPresentation>
                        <DataResponse>{item.company}</DataResponse>
                    </CompanyInfoContainer>
                    <CompanyInfoContainer>
                        <DataPresentation>Localização: </DataPresentation>
                        <DataResponse>{item.location}</DataResponse>
                    </CompanyInfoContainer>
                </CompanyContainer>
            </JobInfoContainer>
        
        </JobContainer>
        )
}