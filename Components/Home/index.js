import React, { useState, useEffect } from 'react'

import ListedElement from './ListedElement'

import API from '../../API/api'

import { MaterialIcons } from '@expo/vector-icons'

import { LogoContainer,
         FirstLogoText,
         SecondLogoText } from '../Login/styles'

import { HomeContainer,
         SearchBar,
         JobSearchContainer,
         SearchIntroduceText,
         SearchConfigContainer,
         SearchContainer,
         InputContainer,
         SearchInput,
         ConfigOptions,
         JobDisplayContainer } from './styles'

export default function Home(){
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    async function loadPage(){
        // Como a APi não fornece o X-total-count
        // não há como controlar o fim do infinity scroll
        async function getDataFromJobsGitHub(){
            const response = await API.get(`/positions.json?page=${page}&search=code`);

            if(response.data.length > 0){
                setData([...data, ...response.data])
                setPage(page+1)
            }
            
        }

        getDataFromJobsGitHub()
    }

    useEffect(() =>{
        try{
            async function getDataFromJobsGitHub(){
                const response = await API.get(`/positions.json?description=python&markdown=true&page=${page}`);

                setData(response.data)
                console.log(response.data.length)
            }
            getDataFromJobsGitHub()
        }catch(e){
            setData(response.data)
        }
        
    },[])


    return(
        <HomeContainer>
            <SearchBar>
                <LogoContainer>
                    <FirstLogoText>Job</FirstLogoText>
                    <SecondLogoText>Hub</SecondLogoText>
                </LogoContainer>

                <JobSearchContainer>
                    <SearchIntroduceText>Procure aqui!</SearchIntroduceText>
                    <SearchConfigContainer>

                        <SearchContainer>
                            <InputContainer>
                                <MaterialIcons name="search"
                                                size={40}/>
                                <SearchInput/>
                            </InputContainer>    
                        </SearchContainer>
                        
                        <ConfigOptions>
                            <MaterialIcons name="settings" size={40}/>
                        </ConfigOptions>

                    </SearchConfigContainer>
                </JobSearchContainer>
            </SearchBar>
            
            
            <JobDisplayContainer data={data}
                                keyExtractor={item => item.id}
                                renderItem={ListedElement}
                                onEndReachedThreshold={0.1}
                                onEndReached={()=> loadPage()}
            />

        </HomeContainer>
    )
}