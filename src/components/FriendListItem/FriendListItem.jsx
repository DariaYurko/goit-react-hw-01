import clsx from "clsx"
import css from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => {

  return (
    <li className={css.friendItem}>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.friendStatus, isOnline && css.isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
