import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
  user: boolean;
}

const base = '/easylist-ui-pwa';

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { user, children } = props;

  if (!user) {
    return <Navigate to={`${base}/login`} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
