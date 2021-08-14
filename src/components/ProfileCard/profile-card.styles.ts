import styled from "styled-components";

import { COLORS } from "../../themes/colors";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  background-color: ${COLORS.ALMOST_BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 50%;
  @media (max-width: 1200px) {
    width: 80%;
  }
  height: 100%;
  display: flex;
`;

export const Avatar = styled.img`
  height: 14rem;
  width: 14rem;
  margin-top: 2rem;
  border-radius: 14rem;
  border: 0.6rem solid ${COLORS.CONCRETE};
`;

export const InfoContainer = styled.div`
  padding: 2rem 1rem;
  background-color: yellow;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 4rem;
  color: ${COLORS.CONCRETE};
  font-weight: bold;
`;
