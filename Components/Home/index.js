import React, { useState, useEffect } from 'react'

import { MaterialIcons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

import API from '../../API/api'

import ListedElement from './ListedElement'

import { Container } from '../../global'

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
         JobDisplayContainer,
         SettingsContainer,
         FulltimeContainer,
         ChangePageContainer,
         TextContainer,
         ApiButton,
         ApiText } from './styles'

/*
Infelizmente styled-components não reconhece propriedades de Modal
*/
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

export default function Home(){

    const navigator = useNavigation()

    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    const [shouldShowSettings, setShouldShowSettings] = useState(false)

    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [fulltime , setFulltime] = useState(false)

    const [shouldReload, setShouldReload] = useState(false)

    function navigateToApiPage(){
        navigator.navigate("ApiPage")
    }

    
    function navigateToHowItWorks(){
        navigator.navigate("HowItWorks")
    }

    async function loadPage(){
        // Como a APi não fornece o X-total-count
        // não há como controlar o fim do infinity scroll
        async function getDataFromJobsGitHub(changePage = false){
            const response = await API.get(`/positions.json?page=${page}&search=${description}&location=${location}&full_time=${fulltime}&description=${description}&markdown=false`);

            if(!changePage && response.data.length > 0){
                setData([...response.data])
            }
            if(changePage && response.data.length > 0){
                setPage(page+1)
            }
            
            setShouldReload(false)
        }

        getDataFromJobsGitHub()
    }

    useEffect(() =>{
        try{
            loadPage()
        }catch(e){
            setData(response.data)
        }
        
    },[shouldReload])

    return(
        <Container>
        <HomeContainer>
            <SearchBar>
                <LogoContainer>
                    <TextContainer>
                        <FirstLogoText>Job</FirstLogoText>
                        <SecondLogoText>Hub</SecondLogoText>
                    </TextContainer>
                    
                    <ChangePageContainer>
                        <MaterialIcons onPress={()=>{}}
                                       name="question-answer"
                                       size={30}/>
                        <ApiButton onPress={()=>navigateToApiPage()}>
                            <ApiText>API</ApiText>
                        </ApiButton>
                        
                    </ChangePageContainer>
                    
                </LogoContainer>

                <JobSearchContainer>
                    <SearchIntroduceText>Procure aqui!</SearchIntroduceText>
                    <SearchConfigContainer>

                        <SearchContainer>
                            <InputContainer>
                                <MaterialIcons onPress={()=>setShouldReload(true)} name="search"
                                                size={40}/>
                                <SearchInput onChangeText={(e)=>setDescription(e)} value={description}/>
                            </InputContainer>
                        </SearchContainer>
                        
                        <ConfigOptions onPress={()=>shouldShowSettings ? setShouldShowSettings(false) : setShouldShowSettings(true) }>
                            <MaterialIcons name="settings" size={40}/>
                        </ConfigOptions>

                    </SearchConfigContainer>
                </JobSearchContainer>
            </SearchBar>
            
            
            <JobDisplayContainer data={data}
                                keyExtractor={item => item.id}
                                renderItem={(data) => <ListedElement data={data}/>}
                                onEndReachedThreshold={0.1}
                                onEndReached={()=> loadPage(true)}
            />

        </HomeContainer>
        
        {
            shouldShowSettings 
            
            &&
        
        <SettingsContainer 
            transparent={true}
            visible={shouldShowSettings}
            onRequestClose={()=>Alert.alert('fechei')}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.changeInformationContainer}>
                    <JobSearchContainer>
                        <SearchIntroduceText>Insira a localização</SearchIntroduceText>
                        <SearchConfigContainer>

                            <SearchContainer>
                                <InputContainer>
                                    <MaterialIcons name="search"
                                                    size={40}/>
                                    <SearchInput onChangeText={(e)=>setLocation(e)} value={location}/>
                                </InputContainer>    
                            </SearchContainer>
                        
                        </SearchConfigContainer>
                    </JobSearchContainer>
                    <JobSearchContainer>
                        <SearchIntroduceText>Insira a descrição</SearchIntroduceText>
                        <SearchConfigContainer>

                            <SearchContainer>
                                <InputContainer>
                                    <MaterialIcons name="search"
                                                    size={40}/>
                                    <SearchInput onChangeText={(e)=>setDescription(e)} value={description}/>
                                </InputContainer>    
                            </SearchContainer>
                        
                        </SearchConfigContainer>
                    </JobSearchContainer>
                    <JobSearchContainer>
                        <SearchIntroduceText>Fulltime?</SearchIntroduceText>
                        <FulltimeContainer>
                        
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setFulltime(true);
                                }}
                                >
                                <Text style={styles.textStyle}>Sim</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                onPress={() => {
                                    setFulltime(false);
                                }}
                                >
                                <Text style={styles.textStyle}>Não</Text>
                            </TouchableHighlight>
                            
                        </FulltimeContainer>
                    </JobSearchContainer>
                    
                    </View>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setShouldShowSettings(!shouldShowSettings);setShouldReload(true)
                        }}
                        >
                        <Text style={styles.textStyle}>Finalizar</Text>
                    </TouchableHighlight>
                </View>
            </View>

        </SettingsContainer>
        }
        </Container>
    )
}

const styles = StyleSheet.create({
    CenteredView: {
        flex: 1,
        height: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
      backgroundColor: "#EAEAEA",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      textAlign: "center"
    },
    changeInformationContainer: {
        flexDirection: "column",
    },
    
  });
  