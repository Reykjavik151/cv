import React, { useMemo } from "react";

import { DefaultTextPreset, IDefaultTextProps } from "./default-text.props";
import {
  StyledContainer,
  StyledDefaultText,
  StyledDescription,
  StyledLargeText,
  StyledMediumText,
  StyledSmallText,
  StyledTitle,
} from "./default-text.styles";

export const DefaultText: React.FC<IDefaultTextProps> = ({
  children,
  preset,
}) => {
  const StyledPresetText = useMemo(() => {
    switch (preset) {
      default:
      case DefaultTextPreset.Description:
        return StyledDescription;
      case DefaultTextPreset.Title:
        return StyledTitle;
      case DefaultTextPreset.Small:
        return StyledSmallText;
      case DefaultTextPreset.Medium:
        return StyledMediumText;
      case DefaultTextPreset.Large:
        return StyledLargeText;
    }
  }, [preset]);

  return (
    <StyledContainer>
      <StyledDefaultText>
        <StyledPresetText>{children}</StyledPresetText>
      </StyledDefaultText>
    </StyledContainer>
  );
};
