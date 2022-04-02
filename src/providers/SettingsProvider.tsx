import React, { useState, useEffect } from 'react';

// types
import { ISettingsState } from '../interfaces';

export const SettingsContext = React.createContext(null);

const SettingsProvider: React.FC = ({ children }) => {
  const [checkboxPos, setCheckboxPos] = useState<'left' | 'right'>('right');

  /**
   * CHECKBOX related settings
   */
  useEffect(() => {
    const checkbox: string = localStorage.getItem('checkbox');

    if (checkbox === 'left' || checkbox === 'right') {
      setCheckboxPos(checkbox);
    }
  }, []);

  const handleCheckboxPos = (value: 'left' | 'right') => {
    localStorage.setItem('checkbox', value);
    setCheckboxPos(value);
  };

  const values: ISettingsState = {
    checkboxPos,
    handleCheckboxPos
  };

  return (
    <SettingsContext.Provider
      value={values}
      children={children}
    />
  );
}

export default SettingsProvider;
