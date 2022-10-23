import React, { ChangeEvent } from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { ActionIcon, Group, Modal, Input, Button, Text } from '@mantine/core';

// api
import { deleteSpace, postNewItem } from '../../../../api';

// styling
import { Plus, ShoppingCart, Trash } from 'tabler-icons-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface IProps {
  spaceId: string;
}

const ButtonGroup: React.FC<IProps> = (props) => {
  const { lang } = React.useContext(SettingsContext);
  const { spaceId } = props;
  const [value, setValue] = React.useState<string>('');
  const [inputIsInvalid, setInputInvalid] = React.useState<boolean>(false);
  const [addItemModal, setAddItemModal] = React.useState<boolean>(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState<boolean>(false);

  // Access the client
  const queryClient = useQueryClient();

  // Mutations
  const mutateDeleteSpace = useMutation(deleteSpace, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['spaces']);
    }
  });
  const mutatePostNewItem = useMutation(postNewItem, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['spaces']);
    }
  });

  const addItem = () => {
    const request = {
      name: value,
      complete: false,
    };

    mutatePostNewItem.mutate({spaceId, request});
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
    mutateDeleteSpace.mutate(spaceId);

    setDeleteItemModal(false);
  };

  return (
    <>
      <Group spacing={'md'}>
        <ActionIcon onClick={() => setAddItemModal(true)} size={'sm'} color={'teal'} children={<Plus />} />
        <ActionIcon onClick={() => setDeleteItemModal(true)} size={'sm'} color={'red'} children={<Trash />} />
      </Group>
      <Modal onClose={onModalClose} opened={addItemModal} children={
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
              children={lang.spaceAddItemButtonMore}
              disabled={value === ''}
            />
            <Button
              onClick={onAddItemAndClose}
              size={'xs'}
              color={'teal'}
              children={lang.spaceAddItemButtonClose}
              disabled={value === ''}
            />
          </Group>
        </>
      } />
      <Modal onClose={onModalClose} opened={deleteItemModal} children={
        <>
          <Text align={'center'} children={lang.spaceDeleteSpaceWarning} />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={onDeleteSpace}
              size={'xs'}
              color={'red'}
              children={lang.spaceDeleteSpaceButton}
            />
          </Group>
        </>
      } />
    </>
  );
}

export default ButtonGroup;
