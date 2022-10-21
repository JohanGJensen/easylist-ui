import React, { ChangeEvent } from 'react';
import { useNavigate } from "react-router-dom";
import { SpaceContext } from '../../../providers/SpaceProvider';
import { SettingsContext } from '../../../providers/SettingsProvider';

// components
import Header from '../../../components/Header/Header';
import { Button, Select, Group, Input, Modal } from '@mantine/core';
import { FilePlus, Settings } from 'tabler-icons-react';

// api
import { postNewSpace } from '../../../api';

function HomeHeader() {
  const navigate = useNavigate();

  const { lang } = React.useContext(SettingsContext);
  const { handleAddSpace } = React.useContext(SpaceContext);
  const [addSpaceModal, setAddSpaceModal] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [inputIsInvalid, setInputInvalid] = React.useState<boolean>(false);
  const [selectValue, setSelectValue] = React.useState<string>('All');

  const onAddSpace = () => {
    const request = {
      name: inputValue,
      user: selectValue
    };

    postNewSpace(request)
      .then((res) => handleAddSpace(res.data))
      .catch((error) => console.error(error));

    onCloseModal();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (value === '') {
      setInputInvalid(true);
    }

    if (value !== '' && inputIsInvalid) {
      setInputInvalid(false);
    }

    setInputValue(value);
  };

  const onChangeSelect = (e: string) => {
    setSelectValue(e);
  };

  const onCloseModal = () => {
    setAddSpaceModal(false);
    setInputValue('');
    setInputInvalid(false);
    setSelectValue('All');
  };

  return (
    <>
      <Header
        rightContent={
          <>
            <Button onClick={() => setAddSpaceModal(true)} color={'teal'} children={<FilePlus />} />
            <Button onClick={() => navigate('/easylist-ui-pwa/settings')} color={'teal'} children={<Settings />} />
          </>
        }
      />
      <Modal onClose={onCloseModal} opened={addSpaceModal} children={
        <>
          <Input
            value={inputValue}
            onChange={onChangeInput}
            icon={<FilePlus size={16} />}
            placeholder={lang.homeCreateSpaceInputPlaceholder}
            invalid={inputIsInvalid}
          />
          <Select
            placeholder={lang.spaceUserPlaceholder}
            data={[
              { value: 'All', label: lang.spaceUserOptionAll },
              { value: 'Johan', label: 'Johan' },
              { value: 'Laura', label: 'Laura' },
            ]}
            value={selectValue}
            onChange={onChangeSelect}
          />
          <Group position={'right'} style={{ marginTop: '1.5rem' }}>
            <Button
              onClick={onAddSpace}
              size={'xs'}
              color={'teal'}
              children={lang.homeCreateSpaceAddButton}
              disabled={inputValue === ''}
            />
          </Group>
        </>
      } />
    </>
  );
}

export default HomeHeader;
