import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchIcon from '../../assets/svg/search.svg';
import AdjustIcon from '../../assets/svg/adjust.svg';
import MoreIcon from '../../assets/svg/more.svg';
import ContinueReading from '../../components/ContinueReading';
import Header from '../../components/Header';

import {
    HomeContainer,

    SearchArea,
    SearchInput,

    DefaultScrollHeader,
    DefaultScrollTitle,
    DefaultScrollButton,

    TrendingComicsArea,
    TrendingComicsItem,
    TrendingComicsItemImg,
    TrendingComicsItemName,
    TrendingComicsItemAuthor,

    AuthorArea,
    AuthorItem,
    AuthorItemImg,
    AuthorItemName
} from './styles';

const trendingComicsArray = [
    {id: 1, img: require('../../assets/img/attack-titan.jpg'), title: 'Attack On Titan', author: 'Lucy'},
    {id: 2, img: require('../../assets/img/berserk.jpg'), title: 'Berserk', author: 'Key'},
    {id: 3, img: require('../../assets/img/black-clover.jpg'), title: 'Black Clover', author: 'Masashi'},
    {id: 4, img: require('../../assets/img/bleach.jpg'), title: 'Bleach', author: 'Parang'},
    {id: 5, img: require('../../assets/img/blue-exorcist.jpg'), title: 'Blue Exorcist', author: 'Shrimp'},
    {id: 6, img: require('../../assets/img/boruto.jpg'), title: 'Boruto', author: 'Masashi'},
    {id: 7, img: require('../../assets/img/death-note.jpg'), title: 'Death Note', author: 'Parang'},
];

const topAuthors = [
    {id: 1, img: require('../../assets/img/author1.png'), name: 'Key'},
    {id: 2, img: require('../../assets/img/author2.jpg'), name: 'Lucy'},
    {id: 3, img: require('../../assets/img/author3.jpg'), name: 'Shrimp'},
    {id: 4, img: require('../../assets/img/author4.png'), name: 'Masashi'},
    {id: 5, img: require('../../assets/img/author5.jpg'), name: 'Parang'},
    {id: 6, img: require('../../assets/img/author6.jpg'), name: 'Bvoy'},
]

export default () => {
    const navigation = useNavigation();

    function navigationAuthor (img, name) {
        navigation.navigate('authordetail', {img: img, name: name});
    }

    return(
        <HomeContainer>
            <ScrollView>
                <Header />

                <SearchArea>
                    <SearchIcon fill="#000" width={22} height={18} />
                    <SearchInput placeholderTextColor="#666" placeholder="Search Comic..." />
                    <AdjustIcon fill="#000" width={22} height={18} />
                </SearchArea>

                <TrendingComicsArea>
                    <DefaultScrollHeader>
                        <DefaultScrollTitle>Trending Comics</DefaultScrollTitle>

                        <DefaultScrollButton>
                            <MoreIcon fill="#666" width={22} height={18} />
                        </DefaultScrollButton>
                    </DefaultScrollHeader>
                    
                    <ScrollView contentContainerStyle={{paddingHorizontal: 10}} horizontal={true}>
                        {trendingComicsArray.map((item, k) => (
                            <TrendingComicsItem onPress={() => navigation.navigate('comicdetail')} key={k}>
                                <TrendingComicsItemImg source={item.img} />
                                <TrendingComicsItemName numberOfLines={1}>{item.title}</TrendingComicsItemName>
                                <TrendingComicsItemAuthor numberOfLines={1}>by {item.author}</TrendingComicsItemAuthor>
                            </TrendingComicsItem>
                        ))}
                    </ScrollView>
                </TrendingComicsArea>

                <AuthorArea>
                    <DefaultScrollHeader>
                        <DefaultScrollTitle>Top Author</DefaultScrollTitle>

                        <DefaultScrollButton>
                            <MoreIcon fill="#666" width={22} height={18} />
                        </DefaultScrollButton>
                    </DefaultScrollHeader>

                    <ScrollView contentContainerStyle={{paddingHorizontal: 10}} horizontal={true}>
                        {topAuthors.map((item, k) => (
                            <AuthorItem key={k} onPress={() => navigationAuthor(item.img, item.name)}>
                                    <AuthorItemImg source={item.img} />
                                <AuthorItemName numberOfLines={1}>{item.name}</AuthorItemName>
                            </AuthorItem>
                        ))}
                    </ScrollView>
                </AuthorArea>

            </ScrollView>
            
            <ContinueReading />
        </HomeContainer>
    )
}