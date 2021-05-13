import styled from 'styled-components/native';
import { gray100, gray500, white } from '../../globals';

export const FavoriteContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
`;

export const FilterArea = styled.View`
    background: #eaeaee;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    border-radius: 50px;
    padding: 0 20px;
`;
export const FilterValue = styled.Text``;

export const ComicsArea = styled.View``;
export const ComicsItem = styled.TouchableOpacity`
    flex-direction: row;
    height: 200px;
    width: 100%;
    border: 1px solid #ddd;
    margin-top: 20px;
    border-radius: 20px;
    padding: 15px 20px;
`;
export const ComicsImg = styled.Image`
    height: 170px;
    width: 100px;
    border-radius: 15px;
`;
export const ComicsHeader = styled.View`
    align-self: flex-start;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
`;
export const ComicsColumn = styled.View`
    width: 90%;
`;
export const ComicsName = styled.Text`
    font-size: 16px;
`;
export const ComicsAuthor = styled.Text`
    color: ${gray500};
    font-size: 12px;
`;
export const ComicsFooter = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10px;
`;
export const ComicsFooterText = styled.Text`
    font-size: 12px;
`;
