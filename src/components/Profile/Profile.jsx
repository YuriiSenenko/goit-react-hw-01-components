import css from './Profile.module.css';
import { Descriptions } from './Descriptoins/Descriptions';
import { Stats } from './Stats/Stats';

export const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className={css.profile}>
      <Descriptions
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};
