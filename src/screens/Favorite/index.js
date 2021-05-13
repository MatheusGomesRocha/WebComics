import React from 'react';

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
    return(
        <FavoriteContainer>
            <Header />

            <FilterArea>
                <FilterValue>All Comics</FilterValue>
                <AngleDownIcon fill="#000" width={22} height={18} />
            </FilterArea>

            <ComicsArea>
                {comicsArray.map((item, k) => (
                    <ComicsItem key={k}>
                        <ComicsImg source={item.img} />

                        <ComicsHeader>
                            <ComicsColumn>
                                <ComicsName>{item.name}</ComicsName>
                                <ComicsAuthor>By {item.author}</ComicsAuthor>
                            </ComicsColumn>

                            <DownloadIcon fill={item.downloaded ? '#ff5e62' : '#000'} width={22} height={18} /> 
                        </ComicsHeader>

                        <ComicsFooter>
                            <ComicsFooterText>Next Chapter {item.nextChapter}</ComicsFooterText>
                            <ComicsFooterText>{item.views} View</ComicsFooterText>
                        </ComicsFooter>
                    </ComicsItem>
                ))}
            </ComicsArea>

        </FavoriteContainer>
    )
}