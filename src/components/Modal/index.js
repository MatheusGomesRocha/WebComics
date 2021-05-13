import React, { useContext, useState } from "react";
import { BlurView } from "@react-native-community/blur";
import { useNavigation } from '@react-navigation/native';

import MenuSquareIcon from '../../assets/svg/menu-square.svg';
import AngleDownIcon from '../../assets/svg/angle-down.svg';
import PinIcon from '../../assets/svg/pin.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import UserCircleIcon from '../../assets/svg/user_circle.svg';
import BellIcon from '../../assets/svg/bell.svg';
import SunIcon from '../../assets/svg/sun.svg';
import GiftIcon from '../../assets/svg/gift.svg';
import ConfigIcon from '../../assets/svg/config.svg';
import LogoutIcon from '../../assets/svg/logout.svg';
import { HeaderModalContext } from "../../contexts/HeaderModalContext";

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
  {id: 2, title: 'Favorites', navigation: 'favorite', icon: HeartIcon},
  {id: 3, title: 'Author', navigation: 'author', icon: UserCircleIcon},
  {id: 4, title: 'Notifications', navigation: 'notifications', icon: BellIcon},
  {id: 5, title: 'Night Mode', icon: SunIcon},
  {id: 6, title: 'Donate', navigation: 'donate', icon: GiftIcon},
  {id: 7, title: 'Settings', navigation: 'settings', icon: ConfigIcon},
  {id: 8, title: 'Sign Out', icon: LogoutIcon},
];

export default () => {
  const [buttonClicked, setButtonClicked] = useState(1);
  const {showModal} = useContext(HeaderModalContext);

  const navigation = useNavigation();

  function buttonPressed(id, screen) {
    setButtonClicked(id);
    showModal(false);

    if(screen) {
      navigation.navigate(screen);
    }
  }

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
          <HeaderUser
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
            <UserImg source={require('../../assets/img/user.jpeg')}/>

            <HeaderColumn>
              <UserName>Matheus Gomes</UserName>
              <UserEmail numberOfLines={1}>matheusgomes192@hotmail.com</UserEmail>
            </HeaderColumn>

            <AngleDownIcon style={{marginLeft: 'auto'}} fill="#000" height={18} width={18} />
          </HeaderUser>

          <ButtonsArea>
            {buttonsArray.map((item, k) => (
              <ButtonItem onPress={() => buttonPressed(item.id, item.navigation)} background={buttonClicked === item.id && '#181516'} key={k}>
                <item.icon fill={buttonClicked === item.id ? '#fff' : '#181516'} height={22} width={22} />
                <ButtonTitle color={buttonClicked === item.id && '#fff'}>{item.title}</ButtonTitle>
              </ButtonItem>
            ))}
          </ButtonsArea>
        </ModalArea>
    </ModalContainer>
  );
};
