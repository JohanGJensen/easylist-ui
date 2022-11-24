import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Input, Card } from '@mantine/core';
import Header from 'components/Header/Header';
import Wrapper from '../components/WrapperCard';

import '../styles/styles.css';
import { useForm } from 'react-hook-form';
import { ErrorEnum } from '../hooks/useErrorMessage';

interface RegisterPageProps {
  test?: string;
}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/login`);
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
            error={
              <>{getErrorMessage(errors.userName as { type?: ErrorEnum })}</>
            }
            className={'margin-btm'}
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
                minLength: 3,
                maxLength: 16,
              })}
              placeholder={'write password...'}
            />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label className={'labelStyling'}>confirm password</label>}
            error={
              <>
                {getErrorMessage(
                  errors.confirmPassword as { type?: ErrorEnum }
                )}
              </>
            }
            className={'margin-btm'}
          >
            <Input
              {...register('confirmPassword', {
                required: true,
                minLength: 3,
                maxLength: 16,
              })}
              placeholder={'confirm password...'}
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
