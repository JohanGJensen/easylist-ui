import React, { useEffect, useState, useContext } from 'react';
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
  const [complete, setComplete] = useState<boolean>(false);
  const { space, item } = props;
  const completedStyle = complete ? { textDecoration: 'line-through' } : {};

  useEffect(() => {
    parseBoolean(item.complete);
  }, []);

  const parseBoolean = (complete) => {
    if (typeof complete === 'string') {
      setComplete((complete === 'true') ? true : false);
    }

    if (typeof complete === 'boolean') {
      setComplete(complete);
    }
  };

  const onChange = () => {
    const params = new URLSearchParams();
    const newComplete = !complete;

    params.append('_id', item._id);
    params.append('name', item.name);
    params.append('complete', newComplete.toString());

    setComplete(newComplete);

    postItemUpdate(space._id, item._id, params)
      .then((res) => handleUpdateItem(space._id, res.data.result))
      .catch((error) => console.error(error));
  }

  const onDelete = () => {
    deleteItem(space._id, item._id)
      .then(() => handleDeleteItem(space, item))
      .catch((error) => console.error(error));
  };

  return (
    <Group position={'apart'}>
      <Group direction={'row'} spacing={'xs'}>
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
      <Group direction={'row'} spacing={'xs'}>
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
