import React, { useContext } from "react";

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
import { ThemeContext } from "../ThemeProvider";

export const ProfileCard: React.FC<IProfileCardProps> = ({
  author = "Roman Andreev",
  position = "Senior React Native Developer",
  description = "Extra-experienced developer with amazing programming power!",
  photoSource = IMAGES.ROMAN_PHOTO,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <CardContainer>
        <Avatar src={photoSource} />
        <InfoContainer>
          <DefaultText preset={DefaultTextPreset.Title}>{author}</DefaultText>
          <DefaultText
            preset={DefaultTextPreset.Medium}
            color={theme.SECONDARY_TEXT}
          >
            {position}
          </DefaultText>
        </InfoContainer>
      </CardContainer>
      <ThemeSwitcher />
    </Container>
  );
};
