import React, { useContext } from "react";
import _ from "lodash";

import {
  Container,
  ProjectContainer,
  TechnologiesContainer,
  TechnologyContainer,
} from "./projects-section.styles";
import { IProjectsSectionProps } from "./projects-section.props";
import { DefaultText } from "../DefaultText";
import { DefaultTextPreset } from "../DefaultText/default-text.props";
import { ThemeContext } from "../ThemeProvider";
import { PROJECTS_PREDEFINED_DATA } from "./projects-section.data";
import { FullWidthSeparator } from "..";

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

          {_.map(project.mainFeatures, feature => (
            <DefaultText preset={DefaultTextPreset.XSmall} color={theme.SECONDARY} key={feature}>
              {feature}
            </DefaultText>
          ))}

          <DefaultText preset={DefaultTextPreset.XSmall} color={theme.SECONDARY}>
            Responsibilities:
          </DefaultText>
          {_.map(project.responsibilities, responsibility => (
            <DefaultText
              preset={DefaultTextPreset.XSmall}
              color={theme.SECONDARY}
              key={responsibility}
            >
              {responsibility}
            </DefaultText>
          ))}

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
