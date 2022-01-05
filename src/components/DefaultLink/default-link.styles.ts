import styled from "styled-components";

import { FONTS } from "../../assets";

export const StyledContainer = styled.div``;

interface IStyledDefaultTextProps {
  color?: string;
}
export const StyledDefaultLink = styled.span<IStyledDefaultTextProps>`
  color: ${({ theme, color }) => color ?? theme.PRIMARY_TEXT};
  font-weight: bold;
  font-family: ${FONTS.ROBOTO};
`;

export const StyledSmallLink = styled.a`
  font-size: 1.3rem;
  &:visited,
  &:link {
    color: ${({ theme, color }) => color ?? theme.PRIMARY_TEXT};
  }
`;
export const StyledMediumLink = styled.a`
  font-size: 1.5rem;
  &:visited,
  &:link {
    color: ${({ theme, color }) => color ?? theme.PRIMARY_TEXT};
  }
`;
export const StyledLargeLink = styled.a`
  font-size: 1.7rem;
  &:visited,
  &:link {
    color: ${({ theme, color }) => color ?? theme.PRIMARY_TEXT};
  }
`;
