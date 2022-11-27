import React from 'react';
import Header from '../../../components/Header/Header';
import { Button, Title, Input, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { FieldError, useForm } from 'react-hook-form';
import Wrapper from '../components/WrapperCard';
import useErrorMessage from '../hooks/useErrorMessage';

import '../styles/styles.css';

interface LoginPageProps {
  test?: string;
}

const LoginPage: React.FC<LoginPageProps> = () => {
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

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/register`);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  // const getErrorMessage = (error?: { type?: ErrorEnum }): string => {
  //   if (error?.type) {
  //     return error.type;
  //   }

  //   return '';
  // };

  return (
    <>
      <Header
        absolute={true}
        rightContent={<Button onClick={handleClick}>register</Button>}
      />
      <Wrapper>
        <Card
          withBorder={true}
          radius={'sm'}
          style={{ width: '350px' }}
          className={'glass-morph card'}
        >
          <Title order={2} className={'margin-btm'}>
            Login Page
          </Title>
          <form>
            <Input.Wrapper
              label={<label className={'labelStyling'}>username</label>}
              error={<>{errorMessage(errors.userName as FieldError)}</>}
              className={'margin-btm'}
            >
              <Input
                {...register('userName', {
                  required: 'field is required',
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
                })}
                type={'password'}
                placeholder={'write password...'}
                value={password}
                onChange={handlePasswordChange}
              />
            </Input.Wrapper>
            <Button
              style={{ marginTop: '16px' }}
              fullWidth={true}
              onClick={handleSubmit((data) => console.log(data))}
            >
              Login
            </Button>
          </form>
        </Card>
      </Wrapper>
    </>
  );
};

export default LoginPage;
