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