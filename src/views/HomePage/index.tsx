import React from 'react';
import axios from 'axios';

function HomePage() {
  React.useEffect(() => {
    axios.get('https://easy-list.herokuapp.com/spaces/all', {
      method: 'get'
    })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });

  return (
    <div className="home">
      hello world
    </div>
  );
}

export default HomePage;
