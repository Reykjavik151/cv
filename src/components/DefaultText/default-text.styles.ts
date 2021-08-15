import styled from "styled-components";
import { FONTS } from "../../assets";

import { IThemed } from "../../utils/types";

export const StyledContainer = styled.div``;

export const StyledDefaultText = styled.span`
  color: ${({ theme }: IThemed) => theme.PRIMARY_TEXT};
  font-family: ${FONTS.ROBOTO};
`;

export const StyledTitle = styled.span`
  font-size: 4rem;
  font-weight: bold;
`;
export const StyledDescription = styled.span``;
export const StyledSmallText = styled.span``;
export const StyledMediumText = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;
export const StyledLargeText = styled.span``;
