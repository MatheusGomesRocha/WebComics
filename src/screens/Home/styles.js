import styled from 'styled-components/native';
import { white, background, black } from '../../globals';

export const HomeContainer = styled.SafeAreaView`
    flex: 1;
    background: ${white};
    padding: 20px;
`;

export const SearchArea = styled.View`
    background: ${background};
    flex-direction: row;
    align-items: center;
    height: 56px;
    border-radius: 50px;
    padding: 0 15px;
`;
export const SearchInput = styled.TextInput`
    flex: 1;
    color: ${black};
    padding-left: 10px;
    font-size: 16px;
`;