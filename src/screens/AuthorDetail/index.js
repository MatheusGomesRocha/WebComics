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
                    <AuthorImgContainer>
                        <AuthorImg source={img} />
                    </AuthorImgContainer>

                    <AuthorColumn>
                        <AuthorName>{name}</AuthorName>
                        <AuthorRating>
                            <StarIcon fill="yellow" width={22} height={18} />
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