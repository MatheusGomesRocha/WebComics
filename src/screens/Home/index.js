import React from 'react';

import SearchIcon from '../../assets/svg/search.svg';
import AdjustIcon from '../../assets/svg/adjust.svg';
import MoreIcon from '../../assets/svg/more.svg';

import {
    HomeContainer,

    SearchArea,
    SearchInput
} from './styles';

export default () => {
    return(
        <HomeContainer>
            
            <SearchArea>
                <SearchIcon fill="#000" width={22} height={18} />
                <SearchInput placeholderTextColor="#666" placeholder="Search Comic..." />
                <AdjustIcon fill="#000" width={22} height={18} />
            </SearchArea>
        </HomeContainer>
    )
}