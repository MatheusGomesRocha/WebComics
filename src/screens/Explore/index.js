import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';
import ClockIcon from '../../assets/svg/clock.svg';
import KoreaIcon from '../../assets/svg/south-korea.svg';
import JapanIcon from '../../assets/svg/japan.svg';
import ChinaIcon from '../../assets/svg/china.svg';

import {
    ExploreContainer,

    FilterArea,
    FilterItem,
    FilterText,

    ComicsArea,
    ComicsItem,
    ComicsBackgroundImg,
    ComicsChapter,
    ComicsChapterText,
    ComicsCategory,
    ComicsCategoryText,
    ComicsItemInfo,
    ComicsItemName,
    ComicsItemRelease,
    ComicsItemReleaseText
} from './styles';


const filterArray = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Manhwa'},
    {id: 3, title: 'Manhua'},
    {id: 4, title: 'Manga'},
];

const comicsArray = [
    {id: 1, img: require('../../assets/img/demon-slayer.jpg'), name: 'Demon Slayer', category: 'Manga', lastChapter: '610', release: '45 minutes ago'},
    {id: 2, img: require('../../assets/img/dororo.jpg'), name: 'Dororo', category: 'Manga', lastChapter: '174', release: '1 hour ago'},
    {id: 3, img: require('../../assets/img/fairy-tail.jpg'), name: 'Fairy Tail', category: 'Manhwa', lastChapter: '47', release: '2 hours ago'},
    {id: 4, img: require('../../assets/img/fullmetal.jpg'), name: 'Fullmetal Achimist', category: 'Manhua', lastChapter: '119', release: '2 hours ago'},
    {id: 5, img: require('../../assets/img/god-of-highschool.jpg'), name: 'God Of Highschool', category: 'Manhwa', lastChapter: '258', release: '4 hours ago'},
    {id: 6, img: require('../../assets/img/haikyuu.jpg'), name: 'Haikyuu', category: 'Manga', lastChapter: '517', release: '8 hours ago'},
    {id: 7, img: require('../../assets/img/jujutsu-kaisen.jpg'), name: 'Jujutsu Kaisen', category: 'Manhua', lastChapter: '344', release: '2 days ago'},
    {id: 8, img: require('../../assets/img/mob-pshycho.jpg'), name: 'Mob Psycho 100', category: 'Manhwa', lastChapter: '229', release: '1 week ago'},
];

export default () => {
    const [filter, setFilter] = useState(1);

    return(
        <ExploreContainer>
            <ScrollView>
                <Header />  
                
                <FilterArea>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 10}} horizontal={true}>
                        {filterArray.map((item, k) => (
                            <FilterItem background={filter === item.id && '#ff5e62'} onPress={() => setFilter(item.id)} key={k}>
                                <FilterText color={filter === item.id && '#fff'}>{item.title}</FilterText>
                            </FilterItem>
                        ))}
                    </ScrollView>
                </FilterArea>

                <ComicsArea>
                    {comicsArray.map((item, k) => (
                        <ComicsItem key={k}>
                            <ComicsBackgroundImg imageStyle={{ borderRadius: 25}} source={item.img}>
                                <ComicsChapter>
                                    <ComicsChapterText>Chapter {item.lastChapter}</ComicsChapterText>
                                </ComicsChapter>

                                <ComicsCategory>
                                    {item.category === 'Manga' &&
                                        <JapanIcon width={22} height={20} />
                                    }
                                    {item.category === 'Manhwa' &&
                                        <KoreaIcon width={22} height={20} />
                                    }
                                    {item.category === 'Manhua' &&
                                        <ChinaIcon width={22} height={20} />
                                    }
                                    <ComicsCategoryText>{item.category}</ComicsCategoryText>
                                </ComicsCategory>
                            </ComicsBackgroundImg>

                            <ComicsItemInfo>
                                <ComicsItemName numberOfLines={1}>{item.name}</ComicsItemName>
                                <ComicsItemRelease>
                                    <ClockIcon fill="#000" width={22} height={22} />
                                    <ComicsItemReleaseText>{item.release}</ComicsItemReleaseText>
                                </ComicsItemRelease>
                            </ComicsItemInfo>
                        </ComicsItem>
                    ))}
                </ComicsArea>

            </ScrollView>
        </ExploreContainer>
    )
}