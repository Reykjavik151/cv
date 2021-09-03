import styled from "styled-components";

interface ISeparatorContainerProps {
  height: number;
  backgroundColor?: string;
}
export const SeparatorContainer = styled.div<ISeparatorContainerProps>`
  width: 100%;
  height: ${({ height = 0.2 }) => `${height}rem`};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.PRIMARY_ADDITIONAL};
`;
