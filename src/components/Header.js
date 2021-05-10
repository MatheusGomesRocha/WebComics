import React from 'react';
import styled from 'styled-components/native';

import MenuGridIcon from '../assets/svg/menu-grid.svg';

const Header = styled.View`
    background: #fff;
    flex-direction: row;
`;

const UserImgContainer = styled.View``;
const UserImg = styled.Image`
    width: 50px;
    height: 50px;
`;
const UserBadge = styled.View``;
const UserBadgeText = styled.Text``;

const Column = styled.View``;
const ColumnText = styled.Text``;
const UserName = styled.Text``;

const Button = styled.TouchableOpacity``;


export default () => {
    return(
        <Header>
            <UserImgContainer>
                <UserImg source={require('../assets/img/user.jpeg')} />
                <UserBadge>
                    <UserBadgeText>5</UserBadgeText>
                </UserBadge>
            </UserImgContainer>   

            <Column>
                <ColumnText>Good Morning</ColumnText>
                <UserName>Matheus Gomes</UserName>
            </Column>    

            <Button>
                <MenuGridIcon fill="#000" width={20} height={20} />
            </Button>     
        </Header>
    )
}