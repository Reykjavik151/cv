import React, { useMemo } from "react";

import { DefaultTextPreset, IDefaultTextProps } from "./default-text.props";
import {
  StyledContainer,
  StyledDefaultText,
  StyledDescription,
  StyledLargeText,
  StyledMediumText,
  StyledSmallText,
  StyledXSmallText,
  StyledTitle,
  StyledXXSmallText,
  StyledXXSmallTitle,
} from "./default-text.styles";

export const DefaultText: React.FC<IDefaultTextProps> = ({ children, preset, color }) => {
  const StyledPresetText = useMemo(() => {
    switch (preset) {
      case DefaultTextPreset.XXSmallTitle:
        return StyledXXSmallTitle;
      case DefaultTextPreset.XXSmall:
        return StyledXXSmallText;
      case DefaultTextPreset.XSmall:
        return StyledXSmallText;
      default:
      case DefaultTextPreset.Description:
        return StyledDescription;
      case DefaultTextPreset.Small:
        return StyledSmallText;
      case DefaultTextPreset.Medium:
        return StyledMediumText;
      case DefaultTextPreset.Large:
        return StyledLargeText;
      case DefaultTextPreset.Title:
        return StyledTitle;
    }
  }, [preset]);

  return (
    <StyledContainer>
      <StyledDefaultText color={color}>
        <StyledPresetText>{children}</StyledPresetText>
      </StyledDefaultText>
    </StyledContainer>
  );
};
