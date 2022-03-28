import React, { ChangeEvent } from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { ActionIcon, Group, Modal, Input, Button, Text } from '@mantine/core';

// api
import { deleteSpace, postNewItem } from '../../api';

// styling
import { Plus, ShoppingCart, Trash } from 'tabler-icons-react';

interface IProps {
  spaceId: string;
}

const ButtonGroup: React.FC<IProps> = (props) => {
  const { handleAddItem, handleDeleteSpace } = React.useContext(SpaceContext);
  const { spaceId } = props;
  const [value, setValue] = React.useState<string>('');
  const [inputIsInvalid, setInputInvalid] = React.useState<boolean>(false);
  const [addItemModal, setAddItemModal] = React.useState<boolean>(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState<boolean>(false);

  const addItem = () => {
    const params = new URLSearchParams();
    params.append('name', value);
    params.append('complete', 'false');

    postNewItem(spaceId, params)
      .then(res => {
        handleAddItem(spaceId, res.data.result);
      })
      .catch(error => console.error(error));
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
    deleteSpace(spaceId)
      .then(() => handleDeleteSpace(spaceId))
      .catch(error => console.error(error));

    setDeleteItemModal(false);
  };

  return (
    <>
      <Group direction={'row'} spacing={'md'}>
        <ActionIcon onClick={() => setAddItemModal(true)} size={'sm'} color={'teal'} children={<Plus />} />
        <ActionIcon onClick={() => setDeleteItemModal(true)} size={'sm'} color={'red'} children={<Trash />} />
      </Group>
      <Modal onClose={onModalClose} opened={addItemModal} children={
        <>
          <Input
            value={value}
            onChange={onChange}
            icon={<ShoppingCart size={16} />}
            placeholder={'add item to the list'}
            invalid={inputIsInvalid}
          />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={onAddItemAndMore}
              size={'xs'}
              color={'teal'}
              children={'add more'}
              disabled={value === ''}
            />
            <Button
              onClick={onAddItemAndClose}
              size={'xs'}
              color={'teal'}
              children={'add & close'}
              disabled={value === ''}
            />
          </Group>
        </>
      } />
      <Modal onClose={onModalClose} opened={deleteItemModal} children={
        <>
          <Text align={'center'} children={'are you sure?'} />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={onDeleteSpace}
              size={'xs'}
              color={'red'}
              children={'delete'}
            />
          </Group>
        </>
      } />
    </>
  );
}

export default ButtonGroup;
