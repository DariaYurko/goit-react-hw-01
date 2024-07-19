const FriendListItem = ({ avatar, name, isOnline }) => {
   return (
     <li className="card-friend">
       <img src={avatar} alt="Avatar" width="48" />
       <p>{name}</p>
       <p>{isOnline ? 'Online' : 'Offline'}</p>
     </li>
   );
}

export default FriendListItem