import React, { useContext } from "react";
import _ from "lodash";

import { FaCheckSquare, FaCompress } from "react-icons/fa";
import {
  Container,
  ProjectContainer,
  TechnologiesContainer,
  TechnologyContainer,
  FeaturesContainer,
  ResponsibilitiesContainer,
  FlexRow,
} from "./projects-section.styles";
import { IProjectsSectionProps } from "./projects-section.props";
import { DefaultText } from "../DefaultText";
import { DefaultLink } from "../DefaultLink";
import { DefaultTextPreset } from "../DefaultText/default-text.props";
import { ThemeContext } from "../ThemeProvider";
import { PROJECTS_PREDEFINED_DATA } from "./projects-section.data";
import { DefaultLinkPreset } from "../DefaultLink/default-link.props";

export const ProjectsSection: React.FC<IProjectsSectionProps> = ({
  projects = PROJECTS_PREDEFINED_DATA,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      {_.map(projects, (project, index) => (
        <ProjectContainer key={`project-${project.name}-${index}`}>
          <DefaultText preset={DefaultTextPreset.Medium} color={theme.SECONDARY}>
            {project.name}
          </DefaultText>

          {!!project.appLink && (
            <DefaultLink
              preset={DefaultLinkPreset.Small}
              color={theme.SECONDARY}
              href={project.appLink}
            />
          )}

          <FeaturesContainer>
            {_.map(project.mainFeatures, feature => (
              <FlexRow>
                <FaCheckSquare
                  size={20}
                  color={theme.SECONDARY}
                  style={{ marginRight: "0.7rem" }}
                />
                <DefaultText
                  preset={DefaultTextPreset.XSmall}
                  color={theme.SECONDARY}
                  key={feature}
                >
                  {feature}
                </DefaultText>
              </FlexRow>
            ))}
          </FeaturesContainer>

          <ResponsibilitiesContainer>
            {_.map(project.responsibilities, responsibility => (
              <FlexRow>
                <FaCompress size={20} color={theme.SECONDARY} style={{ marginRight: "0.7rem" }} />
                <DefaultText
                  preset={DefaultTextPreset.XSmall}
                  color={theme.SECONDARY}
                  key={responsibility}
                >
                  {responsibility}
                </DefaultText>
              </FlexRow>
            ))}
          </ResponsibilitiesContainer>

          <TechnologiesContainer>
            {_.map(project.technologies, tech => (
              <TechnologyContainer key={tech}>
                <DefaultText preset={DefaultTextPreset.XXSmallTitle} color={theme.SECONDARY_TEXT}>
                  {tech}
                </DefaultText>
              </TechnologyContainer>
            ))}
          </TechnologiesContainer>
        </ProjectContainer>
      ))}
    </Container>
  );
};
