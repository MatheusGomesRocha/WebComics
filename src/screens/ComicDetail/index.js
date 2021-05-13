import React, { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ChinaIcon from '../../assets/svg/china.svg';
import ShareIcon from '../../assets/svg/share.svg';

import {
    ComicDetailContainer,

    ComicImg,
    ComicCategory,
    ComicCategoryText,
} from './styles';

export default () => {
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
            

            <ComicImg imageStyle={{borderRadius: 20}} source={require('../../assets/img/fairy-tail.jpg')}>
                <ComicCategory>
                    <ChinaIcon width={22} height={18} />
                    <ComicCategoryText>Manhwa</ComicCategoryText>
                </ComicCategory>
            </ComicImg>
        </ComicDetailContainer>
    )
}