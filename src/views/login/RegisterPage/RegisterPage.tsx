import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Title, Input, Card } from '@mantine/core';
import Header from 'components/Header/Header';
import Wrapper from '../components/WrapperCard';

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
        <Card withBorder={true} radius={'sm'} style={{ width: '350px' }}>
          <Title order={2}>Register Page</Title>
          <Input.Wrapper label={<label>username</label>} error={''}>
            <Input placeholder={'write username...'} />
          </Input.Wrapper>
          <Input.Wrapper label={<label>password</label>}>
            <Input placeholder={'write password...'} />
          </Input.Wrapper>
          <Input.Wrapper label={<label>confirm password</label>}>
            <Input placeholder={'confirm password...'} />
          </Input.Wrapper>
        </Card>
      </Wrapper>
    </>
  );
};

export default RegisterPage;
