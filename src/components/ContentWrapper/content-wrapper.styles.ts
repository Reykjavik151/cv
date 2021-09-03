import styled from "styled-components";

export const CenteredContainer = styled.div`
  margin: auto;
`;

export const ContentContainer = styled.div`
  width: 60%;
  @media (min-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 1200px) {
    width: 95%;
  }
`;
