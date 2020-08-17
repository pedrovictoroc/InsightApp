import styled from 'styled-components/native'

export const ApiTutorialContainer = styled.View`
    height: 75%;
    width: 95%;
    background: #FBFBFB;

    align-items: center;

    border-radius: 8px;
`;

export const ApiTutorialHeader = styled.View`
    width: 100%;
    height:10%;

    border-bottom-width: 3px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-color: #FFC803;
`;

export const ApiTutorialHeaderText = styled.Text`
    margin-left: 15px;

    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    line-height: 60px;
    color: #000000;
`;

export const ApiTutorialTextContainer = styled.ScrollView`
    width: 100%;
    height: 90%;

    flex-wrap:nowrap;

    padding: 10px;

`;

export const ApiTutorialTitleSectionContainer = styled.View`
    border-bottom-width: 3px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-color: #FFC803;
`;

export const ApiTutorialTitleSectionText = styled.Text`

    margin-top: 25px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    line-height: 26px;
    color: #000000;

`;

export const ApiTutorialText = styled.Text`

    margin-top: 10px;
    margin-left: 10px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    color: #000000;

`;

export const ApiTutorialDescriptionText = styled.Text`
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-family: Poppins;
    font-style: italic;
    font-weight: 200;
    font-size: 18px;
    line-height: 20px;
    color: #000000;
`;