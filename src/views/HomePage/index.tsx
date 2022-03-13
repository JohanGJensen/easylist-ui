import React from 'react';
import axios from 'axios';

// components
import Header from '../../components/Header/Header';

// styling
import './homepage.css';

function HomePage() {
  React.useEffect(() => {
    axios.get('https://easy-list.herokuapp.com/spaces/all', {
      method: 'get'
    })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });

  return (
    <Header />
  );
}

export default HomePage;
