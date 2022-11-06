import React from 'react';
import Header from '../../../components/Header/Header';
import { Button, Title, Input, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Wrapper from '../components/WrapperCard';
import useErrorMessage, { ErrorEnum } from '../hooks/useErrorMessage';

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

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/register`);
  };

  const getErrorMessage = (error?: { type?: ErrorEnum }): string => {
    if (error?.type) {
      return errorMessage(error.type);
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
        <Card withBorder={true} radius={'sm'} style={{ width: '350px' }}>
          <Title order={2}>Login Page</Title>
          <form>
            <Input.Wrapper
              label={<label>username</label>}
              error={
                <>{getErrorMessage(errors.userName as { type?: ErrorEnum })}</>
              }
            >
              <Input
                {...register('userName', {
                  required: true,
                  minLength: 3,
                  maxLength: 16,
                })}
                placeholder={'write username...'}
              />
            </Input.Wrapper>
            <Input.Wrapper label={<label>password</label>}>
              <Input placeholder={'write password...'} />
            </Input.Wrapper>
            <Button
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
