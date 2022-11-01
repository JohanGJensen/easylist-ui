import React from 'react';

// components
import { Group } from '@mantine/core';

// styling
import './header.css';

export interface HeaderProps {
  position?: 'apart' | 'left' | 'right';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { position = 'right', leftContent, rightContent } = props;

  return (
    <header className="header-bar">
      <Group position={position} style={{ width: '98%', padding: '6px 0px' }}>
        {leftContent && <Group spacing={'xs'}>{leftContent}</Group>}
        {rightContent && <Group spacing={'xs'}>{rightContent}</Group>}
      </Group>
    </header>
  );
};

export default Header;
