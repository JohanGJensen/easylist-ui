import React from 'react';
import Header from '../../../components/Header/Header';
import { Button, Title, Input, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Wrapper from '../components/WrapperCard';
import { ErrorEnum } from '../hooks/useErrorMessage';

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
  // const errorMessage = useErrorMessage();

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/register`);
  };

  const getErrorMessage = (error?: { type?: ErrorEnum }): string => {
    if (error?.type) {
      return error.type;
    }

    return '';
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
              error={
                <>{getErrorMessage(errors.userName as { type?: ErrorEnum })}</>
              }
              className={'margin-btm'}
            >
              <Input
                {...register('userName', {
                  required: true,
                })}
                placeholder={'write username...'}
              />
            </Input.Wrapper>
            <Input.Wrapper
              label={<label className={'labelStyling'}>password</label>}
              error={
                <>{getErrorMessage(errors.password as { type?: ErrorEnum })}</>
              }
              className={'margin-btm'}
            >
              <Input
                {...register('password', {
                  required: true,
                  // minLength: 3,
                  // maxLength: 16,
                })}
                type={'password'}
                placeholder={'write password...'}
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
