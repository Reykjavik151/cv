import React, { useContext } from "react";

import { ThemeSwitcher } from "../ThemeSwitcher";
import {
  Avatar,
  CardContainer,
  Container,
  InfoContainer,
} from "./profile-card.styles";
import { IProfileCardProps } from "./profile-card.props";
import { DefaultText } from "../DefaultText";
import { DefaultTextPreset } from "../DefaultText/default-text.props";
import { ThemeContext } from "../ThemeProvider";
import { PROFILE_CARD_PREDEFINED_DATA } from "./profile-card.data";

export const ProfileCard: React.FC<IProfileCardProps> = ({
  author = PROFILE_CARD_PREDEFINED_DATA.AUTHOR,
  position = PROFILE_CARD_PREDEFINED_DATA.POSITION,
  description = PROFILE_CARD_PREDEFINED_DATA.DESCRIPTION,
  photoSource = PROFILE_CARD_PREDEFINED_DATA.PHOTO_SOURCE,
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
