import React from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Select } from '@mantine/core';

// types

const CheckboxSetting: React.FC = () => {
  const { handleCheckboxPos, checkboxPos } = React.useContext(SettingsContext);

  return (
    <>
      <Text size={'md'} children={'placement of item checkbox'} />
      <Select
        data={[
          { value: 'right', label: 'right' },
          { value: 'left', label: 'left' },
        ]}
        value={checkboxPos}
        onChange={handleCheckboxPos}
      />
    </>
  );
}

export default CheckboxSetting;
