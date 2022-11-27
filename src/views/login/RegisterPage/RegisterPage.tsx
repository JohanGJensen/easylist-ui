import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Input, Card } from '@mantine/core';
import Header from 'components/Header/Header';
import Wrapper from '../components/WrapperCard';

import '../styles/styles.css';
import { FieldError, useForm } from 'react-hook-form';
import useErrorMessage from '../hooks/useErrorMessage';

interface RegisterPageProps {
  test?: string;
}

/**
 * TODO:
 * - add health check - display readiness in ui
 * - add endpoints and functionality for requests
 *
 * NICE-TO-HAVES:
 * - password strength display
 * - local-storage correct token
 * - language option
 */

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const errorMessage = useErrorMessage();
  /**
   * TODO: this is ugly and should be handle in a state manager,
   * so I can separate my components
   */
  const [userValue, setUserValue] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [confirmPassword, setConfirmPassword] = React.useState<string>('');

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/login`);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
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
            error={<>{errorMessage(errors.userName as FieldError)}</>}
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
              value={userValue}
              onChange={handleUserNameChange}
            />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label className={'labelStyling'}>password</label>}
            error={<>{errorMessage(errors.password as FieldError)}</>}
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
              value={password}
              onChange={handlePasswordChange}
            />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label className={'labelStyling'}>confirm password</label>}
            error={<>{errorMessage(errors.confirmPassword as FieldError)}</>}
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
                  value === password || 'the passwords are not matching.',
              })}
              type={'password'}
              placeholder={'confirm password...'}
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </Input.Wrapper>

          <Button
            style={{ marginTop: '16px' }}
            fullWidth={true}
            onClick={handleSubmit((data) => console.log(data))}
          >
            Register
          </Button>
        </Card>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
