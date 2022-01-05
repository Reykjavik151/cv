import styled from "styled-components";

import { IThemed } from "../../utils/types";

export const Container = styled.div`
  padding: 1rem 0;
  border-bottom: 2px solid ${({ theme }: IThemed) => theme.PRIMARY_TEXT};
`;

export const ProjectContainer = styled.div`
  margin-bottom: 2rem;
`;

export const FeaturesContainer = styled.div`
  margin-top: 1.5rem;
`;

export const ResponsibilitiesContainer = styled.div`
  margin-top: 1.5rem;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0px;

  @media (min-width: 2000px) {
    width: 40%;
  }
  @media (min-width: 1200px) and (max-width: 2000px) {
    width: 60%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
`;

export const TechnologyContainer = styled.div`
  background-color: ${({ theme }: IThemed) => theme.PRIMARY_ADDITIONAL};
  padding: 0.2rem 1rem;
  border-radius: 100px;
  margin-right: 0.8rem;
  margin-bottom: 0.7rem;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
