import styled from 'styled-components/native'

export const LogoContainer = styled.View`
    flex-direction: row;
`

export const FirstLogoText = styled.Text`
    margin-bottom: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 36px;
    color: #000000;

`;

export const SecondLogoText = styled.Text`
    margin-bottom: 30px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 36px;
    color: #000000;

`;

export const DataContainer = styled.View`
    width: 85%;
    height: 60%;
    
    /*background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.16);
    border-radius: 8px;
    */
    align-items: center;
    justify-content: center;
`;

export const InputContainer = styled.View`
    width: 100%;
    align-items: flex-start;
    border-bottom-width: 5px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-color: #FFC803;
`;

export const InputName = styled.Text`
    margin-top: 10px;
    margin-bottom: 5px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 46px;
    color: #000000;
`;

export const Input = styled.TextInput`
    width: 80%;
    height: 30px;

    border-radius: 8px;

    margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
    width: 80%;
    margin-top: 30px;
    justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 6px;
    background: #007db8;

    align-items: center;

    padding: 5px;
    margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 20px;
    line-height: 26px;
    color: #e3e3e3;
`;