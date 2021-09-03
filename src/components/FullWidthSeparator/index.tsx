import React from "react";

import { IFullWidthSeparatorProps } from "./full-width-separator.props";
import { SeparatorContainer } from "./full-width-separator.styles";

export const FullWidthSeparator: React.FC<IFullWidthSeparatorProps> = ({
  height = 0.5,
}) => {
  return <SeparatorContainer height={height} />;
};
