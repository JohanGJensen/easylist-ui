import React, { useState, useEffect } from 'react';

// types
import { ILanguage, ISettingsState, LanguageTypes } from '../interfaces';

// languages
import { englishLanguage, getLanguage } from '../languages';

export const SettingsContext = React.createContext({} as ISettingsState);

interface IProviderProps {
  children: React.ReactNode;
}

const SettingsProvider: React.FC<IProviderProps> = ({ children }) => {
  const [checkboxPos, setCheckboxPos] = useState<'left' | 'right'>('right');
  const [langCode, setLangCode] = useState<LanguageTypes>('en_US');
  const [lang, setLang] = useState<ILanguage>(englishLanguage);

  /**
   * CHECKBOX related settings
   */
  useEffect(() => {
    const checkbox: string | null = localStorage.getItem('checkbox');

    if (checkbox === 'left' || checkbox === 'right') {
      setCheckboxPos(checkbox);
    }
  }, []);

  /**
   * LANGUAGE related settings
   */
  useEffect(() => {
    const lang: LanguageTypes | null = JSON.parse(
      localStorage.getItem('lang') as string
    );

    if (lang) {
      setLangCode(lang);
      setLang(getLanguage(lang));
    }
  }, []);

  const handleCheckboxPos = (value: 'left' | 'right') => {
    localStorage.setItem('checkbox', value);
    setCheckboxPos(value);
  };

  const handleLanguage = (value: LanguageTypes) => {
    localStorage.setItem('lang', JSON.stringify(value));
    setLangCode(value);
    setLang(getLanguage(value));
  };

  const values: ISettingsState = {
    checkboxPos,
    handleCheckboxPos,
    langCode,
    lang,
    handleLanguage,
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
