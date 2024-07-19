import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => {
         return (               
              <FriendListItem
                key={friend.id}
                name={friend.name}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
              />
        );
      })}
    </ul>
  );
};

export default FriendList;
