import React from "react";

import { Avatar, CardContainer, Container, Title } from "./profile-card.styles";
import { IProfileCardProps } from "./profile-card.props";
import { IMAGES } from "../../assets";

export const ProfileCard: React.FC<IProfileCardProps> = () => {
  return (
    <Container>
      <CardContainer>
        <Avatar src={IMAGES.ROMAN_PHOTO} />
        <Title>Roman Andreev</Title>
      </CardContainer>
    </Container>
  );
};
