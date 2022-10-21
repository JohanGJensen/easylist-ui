import React, { useState, useContext } from 'react';
import { SpaceContext } from '../../../../providers/SpaceProvider';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Group, Checkbox, ActionIcon } from '@mantine/core';
import { Trash } from 'tabler-icons-react';

// types
import { ISpace, ISpaceItem } from '../../../../interfaces';

// api
import { postItemUpdate, deleteItem } from '../../../../api';

// styling

interface IProps {
  space: ISpace;
  item: ISpaceItem;
}

enum CheckBoxPosition {
  LEFT = 'left',
  RIGHT = 'right'
}

const Item: React.FC<IProps> = (props) => {
  const { handleUpdateItem, handleDeleteItem } = useContext(SpaceContext);
  const { checkboxPos } = useContext(SettingsContext);
  const { space, item } = props;
  const [complete, setComplete] = useState<boolean>(item.complete);
  const completedStyle = complete ? { textDecoration: 'line-through' } : {};

  const onChange = () => {
    const params = {
      id: item.id,
      name: item.name,
      complete: !complete
    };
  
    setComplete(!complete);

    postItemUpdate(space.id, item.id, params)
      .then((res) => handleUpdateItem(space.id, res.data))
      .catch((error) => console.error(error));
  }

  const onDelete = () => {
    deleteItem(space.id, item.id)
      .then(() => handleDeleteItem(space, item))
      .catch((error) => console.error(error));
  };

  return (
    <Group position={'apart'}>
      <Group spacing={'xs'}>
        {
          checkboxPos === CheckBoxPosition.LEFT &&
          <Checkbox onChange={onChange} checked={complete} color={'teal'} />
        }
        <Text
          style={{ ...completedStyle, maxWidth: '210px' }}
          color={complete ? 'dimmed' : 'inherit'}
          size={'lg'}
        >{item.name}</Text>
      </Group>
      <Group spacing={'xs'}>
        {
          checkboxPos === CheckBoxPosition.RIGHT &&
          <Checkbox onChange={onChange} checked={complete} color={'teal'} />
        }
        <ActionIcon onClick={onDelete} size={'sm'} color={'red'} children={<Trash />} />
      </Group>
    </Group>
  );
}

export default Item;
