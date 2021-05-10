import React from 'react';
import styled from 'styled-components/native';
import { defaultColor, gray500, white } from '../globals';

import MoreIcon from '../assets/svg/more.svg';
import AngleRightIcon from '../assets/svg/angle-right.svg';

const ReadingContainer = styled.View`
    background: ${defaultColor};
    justify-content: center;
    position: absolute;
    bottom: 0;
    height: 220px;
    width: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding: 20px;
`;
const ReadingLineAbsolute = styled.View`
    background: ${white};
    position: absolute;
    left: 50%;
    top: 20px;
    height: 5px;
    width: 10%;
    border-radius: 5px;
`;
const ReadingHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;
const ReadingText = styled.Text`
    color: ${white};
    font-size: 18px;
`;
const ReadingButton = styled.TouchableOpacity`
    background: ${white};
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-radius: 50px;
    margin-top: 20px;
`;
const ReadingImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;
const ReadingColumn = styled.View`
    justify-content: center;
    margin-left: 15px;
`;
const ReadingComicName = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;
const ReadingComicChapter = styled.Text``;

export default () => {
    return(
        <ReadingContainer>
            <ReadingLineAbsolute /> 

            <ReadingHeader>
                <ReadingText>Continue Reading</ReadingText>
                <MoreIcon fill="#fff" width={22} height={18} />
            </ReadingHeader>

            <ReadingButton>
                <ReadingImg source={require('../assets/img/berserk.jpg')} />
                <ReadingColumn>
                    <ReadingComicName>Berserk</ReadingComicName>
                    <ReadingComicChapter>Chapter 148</ReadingComicChapter>
                </ReadingColumn>
                <AngleRightIcon style={{marginLeft: 'auto'}} fill="#000" width={22} height={20} />
            </ReadingButton>
        </ReadingContainer>
    )
}