import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';

import StarIcon from '../../assets/svg/star.svg';
import MoreIcon from '../../assets/svg/more.svg';

import {
    AuthorDetailContainer,

    AuthorHeader,
    AuthorHeaderTop,
    AuthorImgContainer,
    AuthorImg,
    AuthorColumn,
    AuthorName,
    AuthorRating,
    AuthorRatingText,
    AuthorDescription,

    InfoArea,
    InfoColumn,
    InfoValue,
    InfoValueFor,
    InfoFollowButton,
    InfoFollowButtonText,

    ComicArea,
    ComicHeader,
    ComicHeaderTitle,
    ComicArrayArea,
    ComicItem,
    ComicItemImg,
    ComicItemName
} from './styles';

const authorComics = [
    {id: 1, img: require('../../assets/img/your-name.jpg'), name: 'Your Name'},
    {id: 2, img: require('../../assets/img/vinland-saga.jpg'), name: 'Vinland Saga'},
    {id: 3, img: require('../../assets/img/tower-of-god.jpg'), name: 'Tower Of God'},
    {id: 4, img: require('../../assets/img/solo-leving.jpg'), name: 'Solo Leving'},
    {id: 5, img: require('../../assets/img/re-zero.jpg'), name: 'Re:zero'},
];

export default () => {
    const route = useRoute();

    const {img, name} = route.params;

    const HeaderComponent = () => {
        return(
            <AuthorHeader>
                <AuthorHeaderTop>
                    <AuthorImgContainer
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.27,
                            shadowRadius: 4.65,
                            elevation: 6
                        }}
                    >
                        <AuthorImg source={img} />
                    </AuthorImgContainer>

                    <AuthorColumn>
                        <AuthorName>{name}</AuthorName>
                        <AuthorRating>
                            <StarIcon fill="#FFD700" width={22} height={18} />
                            <AuthorRatingText>4.4 / 5</AuthorRatingText>
                        </AuthorRating>
                    </AuthorColumn>
                </AuthorHeaderTop>

                <AuthorDescription numberOfLines={2}>
                    John Ronald Reuel Tolkien, CBE was an korean writer poet, WWI veteran a First Korean Soldier to fight on America.
                </AuthorDescription>
            </AuthorHeader>
        )
    }

    return(
        <AuthorDetailContainer>
            <ScrollView>
                <HeaderComponent />

                <InfoArea>
                    <InfoColumn>
                        <InfoValue>14</InfoValue>
                        <InfoValueFor>Book</InfoValueFor>
                    </InfoColumn>

                    <InfoColumn>
                        <InfoValue>1.147</InfoValue>
                        <InfoValueFor>Followers</InfoValueFor>
                    </InfoColumn>

                    <InfoFollowButton>
                        <InfoFollowButtonText>Follow</InfoFollowButtonText>
                    </InfoFollowButton>
                </InfoArea>

                <ComicArea>
                    <ComicHeader>
                        <ComicHeaderTitle>Comic</ComicHeaderTitle>
                        <MoreIcon fill="#666" width={22} height={18} />
                    </ComicHeader>

                    <ComicArrayArea>
                        {authorComics.map((item, k) => (
                            <ComicItem key={k}>
                                <ComicItemImg source={item.img} />
                                <ComicItemName>{item.name}</ComicItemName>
                            </ComicItem>
                        ))}
                    </ComicArrayArea>

                </ComicArea>
            </ScrollView>
        </AuthorDetailContainer>
    )
}