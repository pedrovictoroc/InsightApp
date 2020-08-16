import styled from 'styled-components/native'

export const JobHubHeader = styled.View`
    flex-direction: row;
    
    width: 100%;
    height:10%;
    margin-top:70px;
`;

export const GoBackButton = styled.TouchableOpacity`
    height:100%;
    width:30%;
    
    margin-left: 8px;
`;

export const LogoContainer = styled.View`
    height: 100%;
    width: 70%;
    
    flex-direction: row;
`;

export const JobDescriptionContainer = styled.View`
    height:90%;
    width: 100%;
`;

export const JobGeneralInfoContainer = styled.View`
    width: 100%;
    height: 40%;

    flex-direction: row;
`;

export const CompanyImageContainer = styled.View`
    height: 100%;
    width: 30%;

    align-items: center;
    justify-content: center;
`;

export const ComapanyImage = styled.Image`
    height: 70px;
    width: 70px;
    border-radius: 100px;

    resizeMode: contain;

    margin-top: 5px;
    margin-left: 5px;
`;

export const CompanyTextInfo = styled.View`
    height: 100%;
    width: 70%;

`;

export const CompanyTitleContainer = styled.View`
    height: 40%;
    width: 100%;
    justify-content: center;
`;

export const CompanyTitle = styled.Text`
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    flex-wrap: wrap;

    margin-left: 5px;
`;
         
export const CompanyData = styled.View`
    height: 60%;
    width: 100%;

    flex-wrap: nowrap;


    justify-content: flex-start;
    align-items: flex-start;
`;

export const CompanyResponse = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: right;

    color: #E06D06;
`;

export const CompanyWrapper = styled.View`
    height: 60%;
    width: 100%;

    align-items:center;
`;

export const CompanyDescriptionTextContainer = styled.ScrollView`
    border-radius: 8px;

    width: 95%;
    height:100%;

    background: #FBFBFB;
`;

export const CompanyDescriptionText = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    text-align: right;

    color: #E06D06;
`;