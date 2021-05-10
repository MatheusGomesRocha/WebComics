import styled from 'styled-components/native';
import { white, background, black, gray500, gray100 } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const SearchArea = styled.View`
    background: ${background};
    flex-direction: row;
    align-items: center;
    height: 56px;
    border-radius: 50px;
    padding: 0 15px;
    margin: 20px 20px 0 20px;
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    color: ${black};
    padding-left: 10px;
    font-size: 16px;
`;


export const DefaultScrollHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 15px;
`;
export const DefaultScrollTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${gray500};
`;
export const DefaultScrollButton = styled.TouchableOpacity``;

export const TrendingComicsArea = styled.View`
    margin-top: 30px;
`;
export const TrendingComicsItem = styled.TouchableOpacity`
    margin: 0 10px;
`;
export const TrendingComicsItemImg = styled.Image`
    width: 150px;
    height: 180px;
    border-radius: 20px;
`;
export const TrendingComicsItemName = styled.Text`
    font-weight: bold;
    margin-top: 5px;
    font-size: 16px;
    width: 120px;
`;
export const TrendingComicsItemAuthor = styled.Text`
    color: ${gray500};
    width: 150px;
`;


export const AuthorArea = styled.View`
    padding-top: 50px;
`;
export const DivLineAbsolute = styled.View`
    background: ${gray100};
    position: absolute;
    left: 45%;
    top: 20px;
    height: 5px;
    width: 10%;
    border-radius: 5px;
`;
export const AuthorItem = styled.TouchableOpacity`
    margin: 0 10px;
    align-items: center;
`;
export const AuthorItemImgContainer = styled.View`
    background: ${white};
    align-items: center;
    justify-content: center;
    width: 81px;
    height: 81px;
    border-radius: 50px;
`;
export const AuthorItemImg = styled.Image`
    width: 75px;;
    height: 75px;;
    border-radius: 40px;
`;
export const AuthorItemName = styled.Text`
    font-weight: bold;
    margin-top: 10px;
`;
