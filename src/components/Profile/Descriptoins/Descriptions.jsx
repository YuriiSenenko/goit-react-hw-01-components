import PropTypes from 'prop-types';
import css from './Descriptions.module.css';
export const Descriptions = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.descriptions}>
      <img className="avatar" src={avatar} alt="User avatar" width="200"></img>
      <p className="name">{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Descriptions.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
