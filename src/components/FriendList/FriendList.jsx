import { FriendItem } from './FriendItem/FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendItem friends={friends} />
    </ul>
  );
};
