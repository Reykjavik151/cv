import styled from "styled-components";

import { IThemed } from "../../utils/types";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }: IThemed) => theme.PRIMARY};
`;
