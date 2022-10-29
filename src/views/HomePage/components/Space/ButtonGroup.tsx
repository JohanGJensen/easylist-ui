import React, { ChangeEvent } from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';
import { ISpace } from '../../../../interfaces';

// components
import { ActionIcon, Group, Modal, Input, Button, Text } from '@mantine/core';

// styling
import { Plus, ShoppingCart, Trash } from 'tabler-icons-react';

// mutations
import useMutateSpaces from '../../../../api/mutations/useMutateSpaces';
import useMutateItems from '../../../../api/mutations/useMutateItems';

interface IProps {
  space: ISpace;
}

const ButtonGroup: React.FC<IProps> = (props) => {
  const { lang } = React.useContext(SettingsContext);
  const { space } = props;
  const [value, setValue] = React.useState<string>('');
  const [inputIsInvalid, setInputInvalid] = React.useState<boolean>(false);
  const [addItemModal, setAddItemModal] = React.useState<boolean>(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState<boolean>(false);

  const { removeSpace } = useMutateSpaces();
  const { newItem } = useMutateItems(space);

  const addItem = () => {
    const request = {
      name: value,
      complete: false,
    };
    const data = {
      spaceId: space.id,
      request: request,
    };

    newItem(data);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (value === '') {
      setInputInvalid(true);
    }

    if (value !== '' && inputIsInvalid) {
      setInputInvalid(false);
    }

    setValue(e.target.value);
  };

  const onModalClose = () => {
    setAddItemModal(false);
    setDeleteItemModal(false);
    setValue('');
    setInputInvalid(false);
  };

  const onAddItemAndMore = () => {
    addItem();
    setValue('');
  };

  const onAddItemAndClose = () => {
    addItem();
    onModalClose();
  };

  const onDeleteSpace = () => {
    removeSpace(space.id);

    setDeleteItemModal(false);
  };

  return (
    <>
      <Group spacing={'md'}>
        <ActionIcon
          onClick={() => setAddItemModal(true)}
          size={'sm'}
          color={'teal'}
        >
          <Plus />
        </ActionIcon>
        <ActionIcon
          onClick={() => setDeleteItemModal(true)}
          size={'sm'}
          color={'red'}
        >
          <Trash />
        </ActionIcon>
      </Group>
      <Modal onClose={onModalClose} opened={addItemModal}>
        <>
          <Input
            value={value}
            onChange={onChange}
            icon={<ShoppingCart size={16} />}
            placeholder={lang.spaceAddItemInputPlaceholder}
            invalid={inputIsInvalid}
          />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={onAddItemAndMore}
              size={'xs'}
              color={'teal'}
              disabled={value === ''}
            >
              {lang.spaceAddItemButtonMore}
            </Button>
            <Button
              onClick={onAddItemAndClose}
              size={'xs'}
              color={'teal'}
              disabled={value === ''}
            >
              {lang.spaceAddItemButtonClose}
            </Button>
          </Group>
        </>
      </Modal>
      <Modal onClose={onModalClose} opened={deleteItemModal}>
        <>
          <Text align={'center'}>{lang.spaceDeleteSpaceWarning}</Text>
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button onClick={onDeleteSpace} size={'xs'} color={'red'}>
              {lang.spaceDeleteSpaceButton}
            </Button>
          </Group>
        </>
      </Modal>
    </>
  );
};

export default ButtonGroup;
