import styled from 'styled-components/native'

export const JobContainer = styled.TouchableOpacity`
    flex-direction: row;

    height: 120px;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.16);
    border-radius: 8px;

    margin-bottom: 5px;
`;

export const JobImage = styled.Image`
    height: 40px;
    width: 15%;
    border-radius: 100px;

    resizeMode: contain;

    margin-top: 5px;
    margin-left: 5px;
`;

export const JobInfoContainer = styled.View`
    width: 85%;
    flex-direction: column;
`;

export const TitleContainer = styled.View`
    width: 100%;
    height: 40%;
`;

export const TitleElement = styled.Text`
    font-family: Poppins;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    flex-wrap: wrap;

    margin-left: 5px;
`;

export const CompanyContainer = styled.View`
    height: 60%;
    width: 100%;
    align-items: flex-start;
`;

export const CompanyInfoContainer = styled.Text`
        margin-top: 10px;
`;

export const DataPresentation = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: right;

    padding-right:20px;
`;

export const DataResponse = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-align: right;

    color: #E06D06;
`;