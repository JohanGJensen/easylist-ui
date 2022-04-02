import React from 'react';

// components
import { Card } from '@mantine/core';

// types

interface IProps {
  content: React.ReactNode;
}

const SettingsCard: React.FC<IProps> = (props) => {
  const { content } = props;

  return <Card withBorder={true} children={content} />;
}

export default SettingsCard;
