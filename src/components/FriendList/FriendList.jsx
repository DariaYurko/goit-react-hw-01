import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.fiendList}>
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
