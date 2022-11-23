import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Input, Card } from '@mantine/core';
import Header from 'components/Header/Header';
import Wrapper from '../components/WrapperCard';

import '../styles/styles.css';

interface RegisterPageProps {
  test?: string;
}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/login`);
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
            label={<label>username</label>}
            error={''}
            className={'margin-btm'}
          >
            <Input placeholder={'write username...'} />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label>password</label>}
            className={'margin-btm'}
          >
            <Input placeholder={'write password...'} />
          </Input.Wrapper>
          <Input.Wrapper
            label={<label>confirm password</label>}
            className={'margin-btm'}
          >
            <Input placeholder={'confirm password...'} />
          </Input.Wrapper>
        </Card>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
