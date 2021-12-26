import styled from "styled-components";

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  paddingTop: 32px;
`;

export const ContentContainer = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 92%;
  }
`;
