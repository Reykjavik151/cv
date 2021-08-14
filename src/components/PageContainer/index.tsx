import React from "react";

import { Container } from "./page-container.styles";
import { IPageContainerProps } from "./page-container.props";

export const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
