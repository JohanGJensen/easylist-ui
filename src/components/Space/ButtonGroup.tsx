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
  const { handleAddItem } = React.useContext(SpaceContext);
  const { spaceId } = props;
  const [value, setValue] = React.useState<string>('');
  const [addItemModal, setAddItemModal] = React.useState<boolean>(false);
  const [deleteItemModal, setDeleteItemModal] = React.useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleModalClose = () => {
    setAddItemModal(false);
    setDeleteItemModal(false);
    setValue('');
  };

  const handleAddItemAndMore = () => {

  };

  const handleAddItemAndClose = () => {
    const params = new URLSearchParams();
    params.append('name', value);
    params.append('complete', 'false');

    postNewItem(spaceId, params)
      .then(res => {
        handleAddItem(spaceId, res.data.result);
      })
      .catch(error => console.error(error));

    handleModalClose();
  };

  const handleDeleteSpace = () => {
    deleteSpace(spaceId)
      .catch(error => console.error(error));

    setDeleteItemModal(false);
  }

  return (
    <>
      <Group direction={'row'} spacing={'md'}>
        <ActionIcon onClick={() => setAddItemModal(true)} size={'sm'} color={'teal'} children={<Plus />} />
        <ActionIcon onClick={() => setDeleteItemModal(true)} size={'sm'} color={'red'} children={<Trash />} />
      </Group>
      <Modal onClose={handleModalClose} opened={addItemModal} children={
        <>
          <Input
            value={value}
            onChange={handleChange}
            icon={<ShoppingCart size={16} />}
            placeholder={'add item to the list'}
          />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={handleAddItemAndMore}
              size={'xs'}
              color={'teal'}
              children={'add more'}
            />
            <Button
              onClick={handleAddItemAndClose}
              size={'xs'}
              color={'teal'}
              children={'add & close'}
            />
          </Group>
        </>
      } />
      <Modal onClose={handleModalClose} opened={deleteItemModal} children={
        <>
          <Text align={'center'} children={'are you sure?'} />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={handleDeleteSpace}
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
