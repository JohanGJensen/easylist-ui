import React from 'react';
import Header from '../../../components/Header/Header';
import { Button, Title, Input, Card } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Wrapper from '../components/WrapperCard';

interface LoginPageProps {
  test?: string;
}

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/easylist-ui-pwa/register`);
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
          <Input.Wrapper label={<label>username</label>} error={''}>
            <Input placeholder={'write username...'} />
          </Input.Wrapper>
          <Input.Wrapper label={<label>password</label>}>
            <Input placeholder={'write password...'} />
          </Input.Wrapper>
        </Card>
      </Wrapper>
    </>
  );
};

export default LoginPage;
