import styled from 'styled-components/native';
import { white, background, black, gray500, gray100 } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
    padding: 20px 0;
`;

export const SearchArea = styled.View`
    background: ${background};
    flex-direction: row;
    align-items: center;
    height: 56px;
    border-radius: 50px;
    padding: 0 15px;
    margin: 0 20px;
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    color: ${black};
    padding-left: 10px;
    font-size: 16px;
`;


export const TrendingComicsArea = styled.View`
    margin-top: 30px;
`;
export const TrendingComicsHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 25px;
`;
export const TrendingComicsTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${gray500};
`;
export const TrendingComicsButton = styled.TouchableOpacity``;
export const TrendingComicsItem = styled.TouchableOpacity`
    margin: 0 10px;
`;
export const TrendingComicsItemImg = styled.Image`
    width: 150px;
    height: 200px;
    border-radius: 20px;
`;
export const TrendingComicsItemName = styled.Text`
    font-weight: bold;
    margin-top: 5px;
    font-size: 16px;
    width: 150px;
`;
export const TrendingComicsItemAuthor = styled.Text`
    color: ${gray500};
    width: 150px;
`;
