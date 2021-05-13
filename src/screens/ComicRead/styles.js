import styled from 'styled-components/native';
import { black, gray100, gray50, white } from '../../globals';

export const ComicReadContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const ComicReadPage = styled.View`
    background: ${gray50};
    flex-direction: row;
    align-self: flex-end;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    right: 20px;
    height: 42px;
    width: 120px;
    border-radius: 30px;
`;
export const ComicReadPageValue = styled.Text``;

export const ComicReadChangePageButton = styled.TouchableOpacity`
    background: ${props=>props.background || black};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40%;
    height: 80px;
    width: 60px;
`;

export const ComicReadChapter = styled.View`
    background: ${black};
    flex-direction: row;
    align-self: center;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 20px;
    height: 54px;
    width: 150px;
    border-radius: 30px;
    padding: 0 15px;
`;
export const ComicReadChapterValue = styled.Text`
    color: ${white};
    font-size: 16px;
`;