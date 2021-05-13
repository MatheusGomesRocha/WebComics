import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity, View } from 'react-native';

import Header from '../../components/Header';
import AngleDownIcon from '../../assets/svg/angle-down.svg';
import DownloadIcon from '../../assets/svg/download.svg';

import {
    FavoriteContainer,

    FilterArea,
    FilterValue,

    ComicsArea,
    ComicsItem,
    ComicsImg,
    ComicsHeader,
    ComicsColumn,
    ComicsName,
    ComicsAuthor,
    ComicsFooter,
    ComicsFooterText,
} from './styles';

const comicsArray = [
    {id: 1, img: require('../../assets/img/naruto-shippuden.jpg'), name: 'Naruto Shippuden', author: 'Masashi', nextChapter: '187', downloaded: true, views: '44k'},
    {id: 2, img: require('../../assets/img/naruto.jpg'), name: 'Naruto', author: 'Masashi', nextChapter: '41', downloaded: false, views: '114k'},
    {id: 3, img: require('../../assets/img/one-piece.jpg'), name: 'One Piece', author: 'Lucy', nextChapter: '1198', downloaded: false, views: '1.1m'},
    {id: 4, img: require('../../assets/img/one-punch-man.jpg'), name: 'One Punch Man', author: 'Key', nextChapter: '651', downloaded: true, views: '5.9m'},
    {id: 5, img: require('../../assets/img/parasyte.jpg'), name: 'Parasyte', author: 'Shrimp', nextChapter: '22', downloaded: false, views: '5k'},
    {id: 6, img: require('../../assets/img/psycho-pass.jpg'), name: 'Psycho Pass', author: 'Key', nextChapter: '110', downloaded: true, views: '354k'},
];

export default () => {
    const navigation = useNavigation();

    return(
        <FavoriteContainer>
            <ScrollView contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 20}}>
                <Header />

                <FilterArea>
                    <FilterValue>All Comics</FilterValue>
                    <AngleDownIcon fill="#000" width={22} height={18} />
                </FilterArea>

                <ComicsArea>
                    {comicsArray.map((item, k) => (
                        <ComicsItem onPress={() => navigation.navigate('comicdetail')} key={k}>
                            <ComicsImg source={item.img} />

                            <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                                <ComicsHeader>
                                    <ComicsColumn>
                                        <ComicsName numberOfLines={1}>{item.name}</ComicsName>
                                        <ComicsAuthor>By {item.author}</ComicsAuthor>
                                    </ComicsColumn>

                                    <TouchableOpacity>
                                        <DownloadIcon style={{marginLeft: 'auto'}} fill={item.downloaded ? '#ff5e62' : '#000'} width={24} height={20} /> 
                                    </TouchableOpacity>
                                </ComicsHeader>

                                <ComicsFooter>
                                    <ComicsFooterText>Next Chapter {item.nextChapter}</ComicsFooterText>
                                    <ComicsFooterText>{item.views} View</ComicsFooterText>
                                </ComicsFooter>
                            </View>
                        </ComicsItem>
                    ))}
                </ComicsArea>

            </ScrollView>
        </FavoriteContainer>
    )
}