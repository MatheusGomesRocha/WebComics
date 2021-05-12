import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import Header from '../../components/Header';

import {
    ExploreContainer,

    FilterArea,
    FilterItem,
    FilterText
} from './styles';


const filterArray = [
    {id: 1, title: 'All'},
    {id: 2, title: 'Manhwa'},
    {id: 3, title: 'Manhua'},
    {id: 4, title: 'Manga'},
];

export default () => {
    const [filter, setFilter] = useState(1);

    return(
        <ExploreContainer>
            <Header />

            <ScrollView>
                
                <FilterArea>
                    <ScrollView contentContainerStyle={{paddingHorizontal: 10}} horizontal={true}>
                        {filterArray.map((item, k) => (
                            <FilterItem background={filter === item.id && '#ff5e62'} onPress={() => setFilter(item.id)} key={k}>
                                <FilterText color={filter === item.id && '#fff'}>{item.title}</FilterText>
                            </FilterItem>
                        ))}
                    </ScrollView>
                </FilterArea>

            </ScrollView>
        </ExploreContainer>
    )
}