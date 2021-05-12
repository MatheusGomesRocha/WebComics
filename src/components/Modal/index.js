import React, { useContext } from "react";
import { BlurView } from "@react-native-community/blur";

import MenuSquareIcon from '../assets/svg/menu-square.svg';
import AngleDownIcon from '../assets/svg/angle-down.svg';
import PinIcon from '../assets/svg/pin.svg';
import { HeaderModalContext } from "../contexts/HeaderModalContext";

import {
  ModalContainer,
  MinimizeButton,

  ModalArea,
  HeaderUser,
  UserImg,
  HeaderColumn,
  UserName,
  UserEmail,

  ButtonsArea,
  ButtonItem,
  ButtonTitle
} from './styles';


const buttonsArray = [
  {id: 1, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 2, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 3, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 4, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 5, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 6, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 7, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
  {id: 8, title: 'Explore Comic', navigation: 'explore', icon: PinIcon},
];

export default () => {
  const {showModal} = useContext(HeaderModalContext);

  return (
    <ModalContainer>
        <BlurView
          style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, flex: 1}}
          blurType="light"
          blurAmount={3}
          reducedTransparencyFallbackColor="white"
        />

        <MinimizeButton onPress={() => showModal(false)}>
          <MenuSquareIcon fill="#fff" height={22} width={22} />
        </MinimizeButton>

        <ModalArea>
          <HeaderUser>
            <UserImg source={require('../assets/img/user.jpeg')}/>

            <HeaderColumn>
              <UserName>Matheus Gomes</UserName>
              <UserEmail numberOfLines={1}>matheusgomes192@hotmail.com</UserEmail>
            </HeaderColumn>

            <AngleDownIcon style={{marginLeft: 'auto'}} fill="#000" height={18} width={18} />
          </HeaderUser>

          <ButtonsArea>
            {buttonsArray.map((item, k) => (
              <ButtonItem key={k}>
                <item.icon fill="#000" height={20} width={20} />
                <ButtonTitle>{item.title}</ButtonTitle>
              </ButtonItem>
            ))}
          </ButtonsArea>
        </ModalArea>
    </ModalContainer>
  );
};
