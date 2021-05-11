import styled from 'styled-components/native';
import { background, white, defaultColor, gray500, gray100 } from '../../globals';

export const AuthorDetailContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
    padding: 0 20px;
`;

export const AuthorHeader = styled.View`
    padding: 20px 0 30px 0;
    border-bottom-width: 1px;
    border-bottom-color: ${background};
`;
export const AuthorHeaderTop = styled.View`
    flex-direction: row;
`;
export const AuthorImgContainer = styled.View`
    background: ${white};
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 86px;
    border-radius: 43px;
`;
export const AuthorImg = styled.Image`
    width: 78px;
    height: 78px;
    border-radius: 39px;
`;
export const AuthorColumn = styled.View`
    justify-content: center;
    margin-left: 20px;
`;
export const AuthorName = styled.Text`
    font-weight: bold;
    font-size: 22px;
`;
export const AuthorRating = styled.View`
    flex-direction: row;
    margin-top: 2px;
`;
export const AuthorRatingText = styled.Text`
    color: ${gray100};
    font-weight: bold;
    margin-left: 5px;
    font-size: 16px;
`;
export const AuthorDescription = styled.Text`
    margin-top: 25px;
    font-size: 16px;
    color: ${gray500};
`;