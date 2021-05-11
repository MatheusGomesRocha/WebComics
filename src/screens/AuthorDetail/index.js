import React from 'react';
import { useRoute } from '@react-navigation/native';

import StarIcon from '../../assets/svg/star.svg';

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
    AuthorDescription
} from './styles';

export default () => {
    const route = useRoute();

    const {img, name} = route.params;

    return(
        <AuthorDetailContainer>
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
        </AuthorDetailContainer>
    )
}