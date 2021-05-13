import styled from 'styled-components/native';
import { black, defaultColor, gray100, gray50, gray500, white } from '../../globals';

export const ComicDetailContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const ComicImg = styled.ImageBackground`
    margin-top: 20px;
    height: 200px;
    margin: 0 20px;
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


export const ComicInfoArea = styled.View`
    flex: 1;
    border-color: #ddd;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    margin-top: 30px;
    padding: 0 20px;
`;
export const SelectButtonArea = styled.View`
    background: ${gray50};
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 30px;
    margin-top: 30px;
`;
export const SelectButton = styled.TouchableOpacity`
    background: ${props=>props.background || 'transparent'};
    align-items: center;
    justify-content: center;
    width: 48%;
    height: 42px;
    border-radius: 30px;
`;
export const SelectButtonText = styled.Text``;

export const ComicInfoHeader = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;
export const ComicInfoColumn = styled.View`
`;
export const ComicInfoName = styled.Text`
    font-size: 24px;
`;
export const ComicInfoType = styled.Text`
    color: ${gray500};
    margin-top: 5px;
`;
export const ComicInfoFavoriteButton = styled.TouchableOpacity`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 62px;
    border-radius: 36px;
    margin-left: auto;
`;

export const ComicSecondaryInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`;
export const ComicSecondaryItem = styled.View`
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 70px;
    border: 1px solid ${gray50};
    border-radius: 10px;
`;
export const ComicSecondaryItemTitle = styled.Text`
    font-size: 16px;
`;
export const ComicSecondaryItemText = styled.Text`
    color: ${gray100};
    margin-top: 5px;
`;

export const ComicDescription = styled.Text`
    margin-top: 30px;
    color: ${gray500};
    font-size: 15px;
    line-height: 22px;
`;

export const ComicAuthor = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
`;
export const ComicAuthorImg = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`;
export const ComicAuthorColumn = styled.View`
    justify-content: center;
    margin-left: 10px;
`;
export const ComicAuthorTitle = styled.Text`
    font-size: 13px;
    color: ${gray500};
`;
export const ComicAuthorName = styled.Text``;
export const ComicReadButton = styled.TouchableOpacity`
    background: ${black};
    align-items: center;
    justify-content: center;
    margin-left: auto;
    height: 48px;
    width: 150px;
    border-radius: 25px;
`;
export const ComicReadButtonText = styled.Text`
    color: ${white};
    font-weight: bold;
`;