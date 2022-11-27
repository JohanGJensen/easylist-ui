import { UserContext } from 'providers/UserProvider';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const base = '/easylist-ui-pwa';

const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const { children } = props;
  const { user } = React.useContext(UserContext);

  if (!user) {
    return <Navigate to={`${base}/login`} replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
