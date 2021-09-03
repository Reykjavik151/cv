import React from "react";

import { IContentWrapperProps } from "./content-wrapper.props";
import { CenteredContainer, ContentContainer } from "./content-wrapper.styles";

export const ContentWrapper: React.FC<IContentWrapperProps> = ({
  children,
}) => {
  return (
    <CenteredContainer>
      <ContentContainer>{children}</ContentContainer>
    </CenteredContainer>
  );
};
