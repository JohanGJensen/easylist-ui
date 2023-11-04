import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsContext } from '../../../providers/SettingsProvider';

// components
import Header from '../../../components/Header/Header';
import { Button, Select, Group, Input, Modal } from '@mantine/core';
import { FilePlus, Settings } from 'tabler-icons-react';

// mutations
import useMutateSpaces from '../../../api/mutations/useSpaceMutation';

import { ISpaceRequest } from '../../../interfaces';
import { useCheckServiceStatus } from 'api/queries/useCheckServiceStatus';

function HomeHeader() {
  const navigate = useNavigate();

  const { lang } = React.useContext(SettingsContext);
  const { isOnline } = useCheckServiceStatus();
  const [addSpaceModal, setAddSpaceModal] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [inputIsInvalid, setInputInvalid] = React.useState<boolean>(false);
  const [selectValue, setSelectValue] = React.useState<string>('All');

  const { createSpace } = useMutateSpaces();

  const onAddSpace = () => {
    const request: ISpaceRequest = {
      name: inputValue,
      user: selectValue,
    };

    createSpace(request);

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
            <Button
              onClick={() => setAddSpaceModal(true)}
              disabled={!isOnline}
              color={'teal'}
            >
              <FilePlus />
            </Button>
            <Button
              onClick={() => navigate('/easylist-ui/settings')}
              disabled={!isOnline}
              color={'teal'}
            >
              <Settings />
            </Button>
          </>
        }
      />
      <Modal onClose={onCloseModal} opened={addSpaceModal}>
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
              disabled={inputValue === ''}
            >
              {lang.homeCreateSpaceAddButton}
            </Button>
          </Group>
        </>
      </Modal>
    </>
  );
}

export default HomeHeader;
