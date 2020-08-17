import styled from 'styled-components/native'


export const HomeContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`;

export const SearchBar = styled.View`
    height: 30%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const JobSearchContainer = styled.View`
    height: 94px;
    width: 100%;

    align-items: flex-start;
`;

export const SearchIntroduceText = styled.Text`
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;

    margin-top: 8px;
    margin-bottom: 5px;
    margin-left: 30px;
`;

export const SearchConfigContainer = styled.View`
    height: 40px;
    width: 100%;

    justify-content: space-between;
    align-items: center;

    flex-direction: row;
`;

export const SearchContainer = styled.View`
    height: 100%;
    width: 80%;
    border-radius: 8px;

    flex-direction: row;
    justify-content: center;
`;

export const InputContainer = styled.View`
    height: 40px;
    width: 80%;

    background: #ffffff;
    border-radius: 8px;

    flex-direction: row;

`;

export const SearchInput = styled.TextInput`
    height: 100%;
    width: 100%;
`;

export const ConfigOptions = styled.TouchableOpacity`
    height: 100%;
    width: 20%;  
`;

export const JobDisplayContainer = styled.FlatList`
    height: 70%;
    width: 90%;

`;

export const SettingsContainer = styled.Modal`
    height: 20%;
    width: 100%;

    border-radius: 8px;
    background: #ffffff;
`;

export const CenteredView = styled.View`
    height: 100%;
    width:100%;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalView = styled.View`
    height: 100%;
    width:100%;
    background: #000000;
    border-radius: 20px;
    align-items: center;
    elevation: 5;
`;

export const FulltimeContainer = styled.View`
    height: 40px;
    width: 50%;

    justify-content: space-between;
    align-items: center;

    flex-direction: row;
`;
