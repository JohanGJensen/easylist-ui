import React from 'react';

export enum ErrorEnum {
  MIN = 'minLength',
  MAX = 'maxLength',
  REQUIRED = 'required',
}

const useErrorMessage = () => {
  return React.useCallback((type?: ErrorEnum) => {
    if (type === ErrorEnum.REQUIRED) {
      return type;
    }

    if (type === ErrorEnum.MIN) {
      return type;
    }

    if (type === ErrorEnum.MAX) {
      return type;
    }

    return '';
  }, []);
};

export default useErrorMessage;
