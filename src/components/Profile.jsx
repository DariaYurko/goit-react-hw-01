const Profile = props => {
  return (
    <div className="profile">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
        />
        <p>{props.username}</p>
        <p>{`@${props.tag}`}</p>
        <p>{props.location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{props.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
