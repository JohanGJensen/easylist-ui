import React from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Select } from '@mantine/core';

// types

const CheckboxSetting: React.FC = () => {
  const { handleLanguage, langCode, lang } = React.useContext(SettingsContext);

  return (
    <>
      <Text size={'md'} children={lang.settingsLanguageText} />
      <Select
        data={[
          { value: 'en_US', label: lang.settingsLanguageOptionEnglish },
        ]}
        value={langCode}
        onChange={handleLanguage}
      />
    </>
  );
}

export default CheckboxSetting;
