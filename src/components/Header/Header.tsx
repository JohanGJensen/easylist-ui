import React from 'react';

// components
import { Button, Group } from '@mantine/core';
import { FilePlus, Trash } from 'tabler-icons-react';

// styling
import './header.css';

function Header() {

  return (
    <header className="header-bar">
      <Group spacing={'xs'} position={'right'} style={{ width: '98%', padding: '6px 0px' }}>
        <Button color={'teal'} children={<FilePlus />} />
        <Button color={'red'} children={<Trash />} />
      </Group>
    </header>
  );
}

export default Header;
