import React from "react";

import {
  ContentWrapper,
  FullWidthSeparator,
  PageContainer,
  ProfileCard,
} from "../../components";
import { IMainPageProps } from "./main.props";

export const MainPage: React.FC<IMainPageProps> = () => {
  return (
    <PageContainer>
      <ProfileCard />
      <FullWidthSeparator height={1} />
      <ContentWrapper></ContentWrapper>
    </PageContainer>
  );
};
