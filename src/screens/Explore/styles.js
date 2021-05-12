import styled from 'styled-components/native';
import { gray100, gray50, gray500, white } from '../../globals';

export const ExploreContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const FilterArea = styled.View`
    flex-direction: row;
    width: 100%;
`;
export const FilterItem = styled.TouchableOpacity`
    background: ${props=>props.background || gray50};
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 54px;
    border-radius: 30px;
    margin: 10px;
`;
export const FilterText = styled.Text`
    color: ${props=>props.color || gray500};
`;


export const ComicsArea = styled.View`
    margin: 30px 20px;
`;
export const ComicsItem = styled.TouchableOpacity`
    margin-bottom: 30px;
`;
export const ComicsBackgroundImg = styled.ImageBackground`
    height: 200px;
    border-radius: 20px;
`;
export const ComicsChapter = styled.View`
    background: ${white};
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: 15px;
    height: 36px;
    width: 120px;
    border-radius: 30px;
`;
export const ComicsChapterText = styled.Text`
    color: ${gray500};
`;
export const ComicsCategory = styled.View`
    background: ${white};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    left: 15px;
    height: 36px;
    width: 120px;
    border-radius: 30px;
`;
export const ComicsCategoryText = styled.Text`
    color: ${gray500};
    margin-left: 10px;
`;
export const ComicsItemInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
export const ComicsItemName = styled.Text`
    font-weight: bold;
    font-size: 18px;
    width: 55%;
`;
export const ComicsItemRelease = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const ComicsItemReleaseText = styled.Text`
    margin-left: 10px;
    color: ${gray500};
`;