import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Input, Card } from '@mantine/core';
import Header from 'components/Header/Header';
import Wrapper from '../components/WrapperCard';

import '../styles/styles.css';
import { FieldError, FieldValues, useForm } from 'react-hook-form';
import useErrorMessage from '../hooks/useErrorMessage';
import BackendStatus from '../components/BackendStatus';
import { UserContext } from 'providers/UserProvider';
import { RegistrationRequest } from 'api';

interface RegisterPageProps {
  test?: string;
}

/**
 * TODO:
 * NICE-TO-HAVES:
 * - password strength display
 * - local-storage correct token
 * - language option
 */

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const errorMessage = useErrorMessage();
  const { register: registerAPI } = React.useContext(UserContext);

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/login`);
  };

  const handleRegister = (d: FieldValues) => {
    const request: RegistrationRequest = {
      username: d.userName,
      password: d.password,
    };

    registerAPI(request);
  };

  return (
    <>
      <Header
        absolute={true}
        rightContent={<Button onClick={handleClick}>login</Button>}
      />
      <Wrapper>
        <Card
          withBorder={true}
          radius={'sm'}
          style={{ width: '350px' }}
          className={'glass-morph card'}
        >
          <Title order={2} className={'margin-btm'}>
            Register Page
          </Title>
          <Input.Wrapper
            label={<label className={'labelStyling'}>username</label>}
            error={errorMessage(errors.userName as FieldError)}
            className={'margin-btm'}
          >
            <Input
              {...register('userName', {
                required: 'field is required',
                minLength: {
                  value: 3,
                  message: 'the minimum character-length is 3.',
                },
                maxLength: {
                  value: 16,
                  message: 'the maximum character-length is 16.',
                },
              })}
              placeholder={'write username...'}
            />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label className={'labelStyling'}>password</label>}
            error={errorMessage(errors.password as FieldError)}
            className={'margin-btm'}
          >
            <Input
              {...register('password', {
                required: 'field is required',
                minLength: {
                  value: 3,
                  message: 'the minimum character-length is 3.',
                },
                maxLength: {
                  value: 16,
                  message: 'the maximum character-length is 16.',
                },
              })}
              type={'password'}
              placeholder={'write password...'}
            />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label className={'labelStyling'}>confirm password</label>}
            error={errorMessage(errors.confirmPassword as FieldError)}
            className={'margin-btm'}
          >
            <Input
              {...register('confirmPassword', {
                required: 'field is required',
                minLength: {
                  value: 3,
                  message: 'the minimum character-length is 3.',
                },
                maxLength: {
                  value: 16,
                  message: 'the maximum character-length is 16.',
                },
                validate: (value) =>
                  value === getValues('password') ||
                  'the passwords are not matching.',
              })}
              type={'password'}
              placeholder={'confirm password...'}
            />
          </Input.Wrapper>

          <Button
            style={{ marginTop: '16px' }}
            fullWidth={true}
            onClick={handleSubmit((data) => handleRegister(data))}
          >
            Register
          </Button>
        </Card>
      </Wrapper>

      <BackendStatus />
    </>
  );
};

export default RegisterPage;
