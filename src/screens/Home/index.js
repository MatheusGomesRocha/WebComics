import React from 'react';

import SearchIcon from '../../assets/svg/search.svg';
import AdjustIcon from '../../assets/svg/adjust.svg';
import MoreIcon from '../../assets/svg/more.svg';

import {
    HomeContainer,

    SearchArea,
    SearchInput,

    TrendingComicsArea,
    TrendingComicsHeader,
    TrendingComicsTitle,
    TrendingComicsButton,
    TrendingComicsItem,
    TrendingComicsItemImg,
    TrendingComicsItemName,
    TrendingComicsItemAuthor
} from './styles';
import { ScrollView } from 'react-native';

const trendingComicsArray = [
    {id: 1, img: require('../../assets/img/attack-titan.jpg'), title: 'Attack On Titan', author: 'Lucy'},
    {id: 2, img: require('../../assets/img/berserk.jpg'), title: 'Berserk', author: 'Key'},
    {id: 3, img: require('../../assets/img/black-clover.jpg'), title: 'Black Clover', author: 'Masashi'},
    {id: 4, img: require('../../assets/img/bleach.jpg'), title: 'Bleach', author: 'Parang'},
    {id: 5, img: require('../../assets/img/blue-exorcist.jpg'), title: 'Blue Exorcist', author: 'Shrimp'},
    {id: 6, img: require('../../assets/img/boruto.jpg'), title: 'Boruto', author: 'Masashi'},
    {id: 7, img: require('../../assets/img/death-note.jpg'), title: 'Death Note', author: 'Parang'},
];

export default () => {
    return(
        <HomeContainer>
            <SearchArea>
                <SearchIcon fill="#000" width={22} height={18} />
                <SearchInput placeholderTextColor="#666" placeholder="Search Comic..." />
                <AdjustIcon fill="#000" width={22} height={18} />
            </SearchArea>

            <TrendingComicsArea>
                <TrendingComicsHeader>
                    <TrendingComicsTitle>Trending Comics</TrendingComicsTitle>

                    <TrendingComicsButton>
                        <MoreIcon fill="#666" width={22} height={18} />
                    </TrendingComicsButton>
                </TrendingComicsHeader>
                
                <ScrollView contentContainerStyle={{paddingHorizontal: 10}} horizontal={true}>
                    {trendingComicsArray.map((item, k) => (
                        <TrendingComicsItem key={k}>
                            <TrendingComicsItemImg source={item.img} />
                            <TrendingComicsItemName numberOfLines={1}>{item.title}</TrendingComicsItemName>
                            <TrendingComicsItemAuthor numberOfLines={1}>by {item.author}</TrendingComicsItemAuthor>
                        </TrendingComicsItem>
                    ))}
                </ScrollView>
            </TrendingComicsArea>

        </HomeContainer>
    )
}