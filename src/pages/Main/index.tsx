import React from "react";

import { PageContainer, ProfileCard } from "../../components";
import { IMainPageProps } from "./main.props";

export const MainPage: React.FC<IMainPageProps> = () => {
  return (
    <PageContainer>
      <ProfileCard />
    </PageContainer>
  );
};
