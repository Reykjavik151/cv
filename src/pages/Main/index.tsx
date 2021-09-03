import React from "react";

import {
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
    </PageContainer>
  );
};
