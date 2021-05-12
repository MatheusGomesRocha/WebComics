import styled from 'styled-components/native';
import { white, background, gray500, gray100 } from "../globals";

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  border-radius: 20px;
`;
export const MinimizeButton = styled.TouchableOpacity`
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
export const ModalArea = styled.View`
  background: rgba(255, 255, 255, 0.92);
  width: 90%;
  height: 80%;
  border-radius: 30px;
  margin-bottom: 20px;
  padding: 20px 10px;
`;

export const HeaderUser = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${gray100};
  border-radius: 30px;
  padding: 20px 15px;
`;
export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const HeaderColumn = styled.View`
  margin-left: 5px;
  width: 70%;
`;
export const UserName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const UserEmail = styled.Text`
  color: ${gray100};
  font-size: 12px;
`;

export const ButtonsArea = styled.View``;
export const ButtonsItem = styled.TouchableOpacity``
export const ButtonsTitle = styled.Text``