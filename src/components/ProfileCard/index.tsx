import React from "react";

import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  Avatar,
  CardContainer,
  Container,
  InfoContainer,
  Title,
} from "./profile-card.styles";
import { IProfileCardProps } from "./profile-card.props";
import { IMAGES } from "../../assets";

export const ProfileCard: React.FC<IProfileCardProps> = () => {
  return (
    <Container>
      <CardContainer>
        <Avatar src={IMAGES.ROMAN_PHOTO} />
        <InfoContainer>
          <Title>Roman Andreev</Title>
        </InfoContainer>
      </CardContainer>
      <ThemeSwitcher />
    </Container>
  );
};
