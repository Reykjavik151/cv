import React, { useMemo } from "react";

import { IDefaultLinkProps, DefaultLinkPreset } from "./default-link.props";
import {
  StyledContainer,
  StyledLargeLink,
  StyledMediumLink,
  StyledSmallLink,
  StyledDefaultLink,
} from "./default-link.styles";

export const DefaultLink: React.FC<IDefaultLinkProps> = ({ preset, color, href, title }) => {
  const StyledPresetLink = useMemo(() => {
    switch (preset) {
      default:
      case DefaultLinkPreset.Small:
        return StyledSmallLink;
      case DefaultLinkPreset.Medium:
        return StyledMediumLink;
      case DefaultLinkPreset.Large:
        return StyledLargeLink;
    }
  }, [preset]);

  return (
    <StyledContainer>
      <StyledDefaultLink color={color}>
        <StyledPresetLink href={href} target="_blank">
          {title ?? href}
        </StyledPresetLink>
      </StyledDefaultLink>
    </StyledContainer>
  );
};
