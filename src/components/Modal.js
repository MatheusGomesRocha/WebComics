import React, { useContext } from "react";
import styled from 'styled-components/native';
import { BlurView } from "@react-native-community/blur";

import MenuSquareIcon from '../assets/svg/menu-square.svg';
import AngleDownIcon from '../assets/svg/angle-down.svg';
import { white, background, gray500, gray100 } from "../globals";
import { HeaderModalContext } from "../contexts/HeaderModalContext";

const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  border-radius: 20px;
`;
const MinimizeButton = styled.TouchableOpacity`
  background: #000;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 30px;
  width: 56px;
  height: 56px;
  border-radius: 30px;
  margin-left: auto;
  border: 1px solid #efefef;
`;
const ModalArea = styled.View`
  background: rgba(255, 255, 255, 0.92);
  width: 90%;
  height: 80%;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 20px 10px;
`;

const HeaderUser = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${gray100};
  border-radius: 30px;
  padding: 20px 15px;
`;
const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
const HeaderColumn = styled.View`
  margin-left: 5px;
  width: 70%;
`;
const UserName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
const UserEmail = styled.Text`
  color: ${gray100};
  font-size: 12px;
`;

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
        </ModalArea>
    </ModalContainer>
  );
};
