import styled from "styled-components";

import { FONTS } from "../../assets";

export const StyledContainer = styled.div``;

interface IStyledDefaultTextProps {
  color?: string;
}
export const StyledDefaultText = styled.span<IStyledDefaultTextProps>`
  color: ${({ theme, color }) => color ?? theme.PRIMARY_TEXT};
  font-family: ${FONTS.ROBOTO};
`;

export const StyledTitle = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
export const StyledDescription = styled.span`
  font-size: 1.6rem;
`;
export const StyledSmallText = styled.span`
  font-size: 1.8rem;
`;
export const StyledMediumText = styled.span`
  font-size: 2rem;
  font-weight: 500;
`;
export const StyledLargeText = styled.span`
  font-size: 2.5rem;
  font-weight: 500;
`;
