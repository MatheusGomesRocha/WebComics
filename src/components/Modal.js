import React from "react";
import styled from 'styled-components/native';
import { white } from "../globals";

const ModalContainer = styled.View`
    height: 500px;
    width: 85%;
    background: ${white};
    align-self: center;
    border-radius: 20px;
`;

export default () => {
  return (
    <ModalContainer>
    </ModalContainer>
  );
};
