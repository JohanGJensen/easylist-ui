import React from 'react';
import { FieldError } from 'react-hook-form';

export enum ErrorEnum {
  MIN = 'minLength',
  MAX = 'maxLength',
  REQUIRED = 'required',
  VALIDATE = 'validate',
  WRONG = 'wrongLogin',
}

const useErrorMessage = () => {
  return React.useCallback((error?: FieldError) => {
    if (!error) {
      return '';
    }

    const { type, message } = error;

    if (type === ErrorEnum.REQUIRED) {
      return message;
    }

    if (type === ErrorEnum.MIN) {
      return message;
    }

    if (type === ErrorEnum.MAX) {
      return message;
    }

    if (type === ErrorEnum.VALIDATE) {
      return message;
    }

    if (type === ErrorEnum.WRONG) {
      return message;
    }

    return '';
  }, []);
};

export default useErrorMessage;
