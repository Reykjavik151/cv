import styled from "styled-components";

import { COLORS } from "../../themes/colors";

export const Container = styled.div`
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
  align-items: center;
  display: flex;
`;

export const Avatar = styled.img`
  height: 14rem;
  width: 14rem;
  border-radius: 14rem;
  border: 0.6rem solid ${COLORS.CONCRETE};
`;

export const Title = styled.span`
  font-size: 7rem;
  color: ${COLORS.CONCRETE};
  font-weight: bold;
`;
