import styled from 'styled-components/native';
import { white } from '../../globals';

export const ComicDetailContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
    padding: 0 20px;
`;

export const ComicImg = styled.ImageBackground`
    margin-top: 20px;
    height: 200px;
`;
export const ComicCategory = styled.View`
    background: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 120px;
    height: 28px;
    border-radius: 20px;
`;
export const ComicCategoryText = styled.Text`
    margin-left: 5px;
`;