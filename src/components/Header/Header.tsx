import React from 'react';

// components
import { Group } from '@mantine/core';

// styling
import './header.css';

export interface HeaderProps {
  absolute?: boolean;
  position?: 'apart' | 'left' | 'right';
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { absolute, position = 'right', leftContent, rightContent } = props;

  const styles: React.CSSProperties = React.useMemo(() => {
    return {
      position: absolute ? 'absolute' : 'inherit',
    };
  }, [absolute]);

  return (
    <header className="header-bar" style={styles}>
      <Group position={position} style={{ width: '98%', padding: '6px 0px' }}>
        {leftContent && <Group spacing={'xs'}>{leftContent}</Group>}
        {rightContent && <Group spacing={'xs'}>{rightContent}</Group>}
      </Group>
    </header>
  );
};

export default Header;
