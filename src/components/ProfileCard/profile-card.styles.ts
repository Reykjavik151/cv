import styled from "styled-components";
import { IThemed } from "../../utils/types";

export const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }: IThemed) => theme.SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  width: 60%;
  @media (max-width: 1500px) {
    width: 80%;
  }
  height: 100%;
  display: flex;
`;

export const Avatar = styled.img`
  height: 16rem;
  width: 16rem;
  margin: 2rem 0;
  border-radius: 14rem;
  border: 0.6rem solid ${({ theme }: IThemed) => theme.PRIMARY_ADDITIONAL};
`;

export const InfoContainer = styled.div`
  padding: 2rem 3rem;
  flex: 1;
  flex-direction: column;
`;
