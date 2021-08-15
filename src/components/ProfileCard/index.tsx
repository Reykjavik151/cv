import React from "react";

import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  Avatar,
  CardContainer,
  Container,
  InfoContainer,
} from "./profile-card.styles";
import { IProfileCardProps } from "./profile-card.props";
import { IMAGES } from "../../assets";
import { DefaultText } from "../DefaultText";
import { DefaultTextPreset } from "../DefaultText/default-text.props";

export const ProfileCard: React.FC<IProfileCardProps> = () => {
  return (
    <Container>
      <CardContainer>
        <Avatar src={IMAGES.ROMAN_PHOTO} />
        <InfoContainer>
          <DefaultText preset={DefaultTextPreset.Medium}>
            Roman Andreev
          </DefaultText>
          <DefaultText preset={DefaultTextPreset.Title}>
            Senior React Native Dev
          </DefaultText>
        </InfoContainer>
      </CardContainer>
      <ThemeSwitcher />
    </Container>
  );
};
