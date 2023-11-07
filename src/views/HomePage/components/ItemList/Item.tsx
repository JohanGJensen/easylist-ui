import React, { useState, useContext } from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Group, Checkbox, ActionIcon } from '@mantine/core';
import { Trash } from 'tabler-icons-react';

// types
import { ISpace, ISpaceItem } from '../../../../interfaces';

// api
import useMutateItems from '../../../../api/mutations/useItemMutation';
import { useCheckServiceStatus } from 'api/queries/useCheckServiceStatus';

// styling

interface IProps {
  space: ISpace;
  item: ISpaceItem;
}

enum CheckBoxPosition {
  LEFT = 'left',
  RIGHT = 'right',
}

const Item: React.FC<IProps> = (props) => {
  const { checkboxPos } = useContext(SettingsContext);
  const { isOnline } = useCheckServiceStatus();
  const { space, item } = props;
  const [complete, setComplete] = useState<boolean>(item.complete);
  const completedStyle = complete ? { textDecoration: 'line-through' } : {};

  const { removeItem, updateItem } = useMutateItems();

  const onChange = () => {
    const request = {
      id: item.id,
      name: item.name,
      complete: !complete,
    };
    const data = {
      spaceId: space.id,
      itemId: item.id,
      request: request,
    };

    setComplete(!complete);

    updateItem(data);
  };

  const onDelete = () => {
    const data = { spaceId: space.id, itemId: item.id };
    removeItem(data);
  };

  return (
    <Group position={'apart'}>
      <Group spacing={'xs'}>
        {checkboxPos === CheckBoxPosition.LEFT && (
          <Checkbox
            onChange={onChange}
            disabled={!isOnline}
            checked={complete}
            color={'teal'}
          />
        )}
        <Text
          style={{ ...completedStyle, maxWidth: '210px' }}
          color={complete ? 'dimmed' : 'inherit'}
          size={'lg'}
        >
          {item.name}
        </Text>
      </Group>
      <Group spacing={'xs'}>
        {checkboxPos === CheckBoxPosition.RIGHT && (
          <Checkbox
            onChange={onChange}
            disabled={!isOnline}
            checked={complete}
            color={'teal'}
          />
        )}
        <ActionIcon
          onClick={onDelete}
          disabled={!isOnline}
          size={'sm'}
          color={'red'}
        >
          <Trash />
        </ActionIcon>
      </Group>
    </Group>
  );
};

export default Item;
