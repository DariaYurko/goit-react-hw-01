import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import './App.css';
import Profile from './components/Profile';

function App() {
  const userData = {
    username: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </div>
  );
}

export default App;
