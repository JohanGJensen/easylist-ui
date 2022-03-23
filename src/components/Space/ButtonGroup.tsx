import React, { ChangeEvent } from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { ActionIcon, Group, Modal, Input, Button } from '@mantine/core';

// api
import { postNewItem } from '../../api';

// styling
import { Plus, ShoppingCart, Trash } from 'tabler-icons-react';

interface IProps {
  spaceId: string;
}

const ButtonGroup: React.FC<IProps> = (props) => {
  const context = React.useContext(SpaceContext);
  const { spaceId } = props;
  const [value, setValue] = React.useState<string>('');
  const [modal, setModal] = React.useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleModalClose = () => {
    setModal(false);
    setValue('');
  };

  const handleAddItemAndMore = () => {

  };

  const handleAddItemAndClose = () => {
    const params = new URLSearchParams();
    params.append('name', value);
    params.append('complete', 'false');

    postNewItem(spaceId, params)
      // TODO: Add new item in frontend - endpoint should return it 
      .catch(error => console.error(error));

    handleModalClose();
  };

  return (
    <>
      <Group direction={'row'} spacing={'md'}>
        <ActionIcon onClick={() => setModal(true)} size={'sm'} color={'teal'} children={<Plus />} />
        <ActionIcon size={'sm'} color={'red'} children={<Trash />} />
      </Group>
      <Modal onClose={handleModalClose} opened={modal} children={
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
    </>
  );
}

export default ButtonGroup;
