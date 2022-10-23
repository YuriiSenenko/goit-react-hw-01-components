import css from './FriendItem.module.css';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <li key={id} className={css.item}>
          {isOnline ? (
            <span className={`${css.status} ${css.online}`}>Online</span>
          ) : (
            <span className={`${css.status} ${css.offline}`}>Offline</span>
          )}
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </>
  );
};

FriendItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
