import React from 'react';
import Header from '../../../components/Header/Header';
import { Button, Title, Input, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { FieldError, FieldValues, useForm } from 'react-hook-form';
import Wrapper from '../components/WrapperCard';
import useErrorMessage from '../hooks/useErrorMessage';

import '../styles/styles.css';
import BackendStatus from '../components/BackendStatus';
import { UserContext } from 'providers/UserProvider';
import { RegistrationRequest } from 'api';

const LoginPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const errorMessage = useErrorMessage();
  const { login } = React.useContext(UserContext);

  /**
   * TODO: this is ugly and should be handle in a state manager,
   * so I can separate my components
   */
  const [userValue, setUserValue] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/register`);
  };

  const handleLogin = (d: FieldValues) => {
    const request: RegistrationRequest = {
      username: d.userName,
      password: d.password,
    };

    login(request);
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

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
              onClick={handleSubmit((data) => handleLogin(data))}
            >
              Login
            </Button>
          </form>
        </Card>
      </Wrapper>

      <BackendStatus />
    </>
  );
};

export default LoginPage;
