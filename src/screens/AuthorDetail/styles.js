import styled from 'styled-components/native';
import { background, white, defaultColor, gray500, gray100 } from '../../globals';

export const AuthorDetailContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
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
    width: 96px;
    height: 96px;
    border-radius: 48px;
`;
export const AuthorImg = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 45px;
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
    align-items: center;
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


export const InfoArea = styled.View`
    flex-direction: row;
    margin-top: 20px;
`;
export const InfoColumn = styled.View`
    width: 23%;
`;
export const InfoValue = styled.Text`
    font-weight: bold;
    font-size: 20px;
`;
export const InfoValueFor = styled.Text`
    color: ${gray100};
    font-size: 16px;
    margin-top: 5px;
`;
export const InfoFollowButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 45%;
    height: 54px;
    margin-left: auto;
`;
export const InfoFollowButtonText = styled.Text`
    color: ${white};
    font-size: 18px;
`;


export const ComicArea = styled.View`
    margin-top: 40px;
`;
export const ComicHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ComicHeaderTitle = styled.Text`
    font-size: 18px;
`;
export const ComicArrayArea = styled.View`
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const ComicItem = styled.TouchableOpacity`
    width: 180px;
    margin: 15px 0;
`;
export const ComicItemImg = styled.Image`
    height: 250px;
    width: 180px;
    border-radius: 20px;
`;
export const ComicItemName = styled.Text`
    font-size: 18px;
    margin-top: 5px;
`;
