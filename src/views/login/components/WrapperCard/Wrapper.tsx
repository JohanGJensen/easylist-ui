import React from 'react';
import './wrapper.css';

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper: React.FC<WrapperProps> = (props) => {
  const { children } = props;

  return <div className={'login-wrapper'}>{children}</div>;
};

export default Wrapper;
