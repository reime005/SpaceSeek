import * as React from 'react';

import { Title } from '../Basic/Basic';
import { StyledSectionWrapper } from './Settings.styled';

interface Props {
  icon: JSX.Element;
  title: string;
}

export const SettingsListSectionHeader = (props: Props) => {
  const { icon, title } = props;

  return (
    <StyledSectionWrapper>
      {icon}

      <Title size="l" style={{ marginLeft: 16 }}>
        {title}
      </Title>
    </StyledSectionWrapper>
  );
};
