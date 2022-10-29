import React from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Select } from '@mantine/core';

// types

const CheckboxSetting: React.FC = () => {
  const { handleCheckboxPos, checkboxPos, lang } =
    React.useContext(SettingsContext);

  return (
    <>
      <Text size={'md'}>{lang.settingsCheckboxText}</Text>
      <Select
        data={[
          { value: 'right', label: lang.settingsCheckboxOptionRight },
          { value: 'left', label: lang.settingsCheckboxOptionLeft },
        ]}
        value={checkboxPos}
        onChange={handleCheckboxPos}
        withinPortal={true}
      />
    </>
  );
};

export default CheckboxSetting;
