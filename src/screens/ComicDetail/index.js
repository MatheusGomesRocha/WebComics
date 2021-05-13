import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChinaIcon from '../../assets/svg/china.svg';
import ShareIcon from '../../assets/svg/share.svg';
import HeartIcon from '../../assets/svg/heart.svg';

import {
    ComicDetailContainer,

    ComicImg,
    ComicCategory,
    ComicCategoryText,

    ComicInfoArea,
    SelectButtonArea,
    SelectButton,
    SelectButtonText,

    ComicInfoHeader,
    ComicInfoColumn,
    ComicInfoName,
    ComicInfoType,
    ComicInfoFavoriteButton,

    ComicSecondaryInfo,
    ComicSecondaryItem,
    ComicSecondaryItemTitle,
    ComicSecondaryItemText,

    ComicDescription,

    ComicAuthor, 
    ComicAuthorImg,
    ComicAuthorColumn,
    ComicAuthorTitle,
    ComicAuthorName,
    ComicReadButton,
    ComicReadButtonText,
} from './styles';

export default () => {
    const [select, setSelect] = useState('informations')
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={{marginRight: 20}}>
                <ShareIcon fill="#000" width={22} height={18} />
            </TouchableOpacity>
          ),
        });
      }, [navigation]);

    return(
        <ComicDetailContainer>
            <ScrollView>
                <ComicImg imageStyle={{borderRadius: 20}} source={require('../../assets/img/fairy-tail.jpg')}>
                    <ComicCategory>
                        <ChinaIcon width={22} height={18} />
                        <ComicCategoryText>Manhwa</ComicCategoryText>
                    </ComicCategory>
                </ComicImg>

                <ComicInfoArea>
                    <SelectButtonArea>
                        <SelectButton background={select === 'informations' && '#fff'} onPress={() => setSelect('informations')}>
                            <SelectButtonText>Informations</SelectButtonText>
                        </SelectButton>
                        <SelectButton background={select === 'chapter' && '#fff'} onPress={() => setSelect('chapter')}>
                            <SelectButtonText>Chapter</SelectButtonText>
                        </SelectButton>
                    </SelectButtonArea>

                    <ComicInfoHeader>
                        <ComicInfoColumn>
                            <ComicInfoName>Fairy Tail</ComicInfoName>
                            <ComicInfoType>Action, Comedy, Dragons, Fight</ComicInfoType>
                        </ComicInfoColumn>

                        <ComicInfoFavoriteButton>
                            <HeartIcon fill="#fff" width={30} height={30} />
                        </ComicInfoFavoriteButton>
                    </ComicInfoHeader>

                    <ComicSecondaryInfo>
                        <ComicSecondaryItem>
                            <ComicSecondaryItemTitle>Rating</ComicSecondaryItemTitle>
                            <ComicSecondaryItemText>4.5</ComicSecondaryItemText>
                        </ComicSecondaryItem>

                        <ComicSecondaryItem>
                            <ComicSecondaryItemTitle>Chapter</ComicSecondaryItemTitle>
                            <ComicSecondaryItemText>150+</ComicSecondaryItemText>
                        </ComicSecondaryItem>

                        <ComicSecondaryItem>
                            <ComicSecondaryItemTitle>Language</ComicSecondaryItemTitle>
                            <ComicSecondaryItemText>ENG</ComicSecondaryItemText>
                        </ComicSecondaryItem>
                    </ComicSecondaryInfo>

                    <ComicDescription>
                        The Journey to the martial peak is a lonely, solitary and long one, in the face
                        of adversity, you must survive and remain undefected. 
                    </ComicDescription>

                    <ComicAuthor>
                        <ComicAuthorImg source={require('../../assets/img/author3.jpg')} />

                        <ComicAuthorColumn>
                            <ComicAuthorTitle>Author</ComicAuthorTitle>
                            <ComicAuthorName>by Shrimp</ComicAuthorName>
                        </ComicAuthorColumn>

                        <ComicReadButton onPress={() => navigation.navigate('comicread')}>
                            <ComicReadButtonText>Read Now</ComicReadButtonText>
                        </ComicReadButton>
                    </ComicAuthor>
                </ComicInfoArea>
            </ScrollView>
        </ComicDetailContainer>
    )
}