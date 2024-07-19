// import { useState } from 'react';
import userData from './userData.json';
import friends from './friends.json';

import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

function App() {
  return (
    <div className="container">
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
