import React, { useState, useContext } from 'react';
import { Modal, View } from 'react-native';
import styled from 'styled-components/native';

import ModalComponent from './Modal';
import MenuSquareIcon from '../assets/svg/menu-square.svg';
import { white, defaultColor, gray100, background, gray500 } from '../globals';
import { HeaderModalContext } from '../contexts/HeaderModalContext';

const Header = styled.View`
    background: ${white};
    flex-direction: row;
    align-items: center;
    height: 96px;
    padding: 0 20px;
`;

const UserImgContainer = styled.View`
    background: ${white};
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 54px;
    height: 54px;
`;
const UserImg = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 30px;
`;
const UserBadge = styled.View`
    background: ${defaultColor};
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: -5px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
`;
const UserBadgeText = styled.Text`
    color: ${white};
    font-size: 10px;
`;

const Column = styled.View`
    margin-left: 15px;
`;
const ColumnText = styled.Text`
    color: ${gray100};
    font-weight: bold;
    font-size: 15px;
`;
const UserName = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;

const Button = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    border-radius: 30px;
    border: 1px solid ${background};
    margin-left: auto;
`;


export default () => {
    const {modalVisible, showModal} = useContext(HeaderModalContext);

    return(
        <Header>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    showModal(!modalVisible);
                }}
            >
                <ModalComponent />
            </Modal>

            <UserImgContainer 
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
                <UserImg source={require('../assets/img/user.jpeg')} />
                <UserBadge>
                    <UserBadgeText>5</UserBadgeText>
                </UserBadge>
            </UserImgContainer>   

            <Column>
                <ColumnText>Good Morning</ColumnText>
                <UserName>Matheus Gomes</UserName>
            </Column>    

            <Button onPress={() => showModal(true)}>
                <MenuSquareIcon fill="#000" width={22} height={22} />
            </Button>     
        </Header>
    )
}