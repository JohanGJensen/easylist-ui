import React from 'react';
import { SettingsContext } from '../../../../providers/SettingsProvider';

// components
import { Text, Select } from '@mantine/core';

// types

const CheckboxSetting: React.FC = () => {
  const { handleLanguage, langCode, lang } = React.useContext(SettingsContext);

  return (
    <>
      <Text size={'md'}>{lang.settingsLanguageText}</Text>
      <Select
        data={[
          { value: 'en_US', label: lang.settingsLanguageOptionEnglish },
          { value: 'da_DK', label: lang.settingsLanguageOptionDanish },
          { value: 'es_ES', label: lang.settingsLanguageOptionSpanish },
        ]}
        value={langCode}
        onChange={handleLanguage}
        withinPortal={true}
      />
    </>
  );
};

export default CheckboxSetting;
