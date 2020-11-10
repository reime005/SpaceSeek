import React from 'react';
import { RegularText, Title } from '../Basic/Basic';
import { DescriptionWrapper } from './LaunchContent.styled';

interface TextProps {
  text?: string;
}

export const Description = (props: TextProps) => {
  const { text } = props;

  if (!text || !text.length) {
    return null;
  }

  return (
    <DescriptionWrapper>
      <RegularText>{text}</RegularText>
    </DescriptionWrapper>
  );
};

export const ContentTitle = (props: TextProps) => {
  const { text } = props;

  if (!text || !text.length) {
    return null;
  }

  return (
    <Title size="xl" numberOfLines={2}>
      {text}
    </Title>
  );
};

export const SectionTitle = (props: TextProps) => {
  const { text } = props;

  if (!text || !text.length) {
    return null;
  }

  return (
    <Title size="m" fontColor="primary" numberOfLines={2}>
      {text}
    </Title>
  );
};
