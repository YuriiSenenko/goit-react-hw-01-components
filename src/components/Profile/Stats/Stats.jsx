import css from './Stats.module.css';
import PropTypes from 'prop-types';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className="label">Folovers</span>
        <span className={css.quatitu}>{followers}</span>
      </li>
      <li className={css.item}>
        <span className="label">Views</span>
        <span className={css.quatitu}>{views}</span>
      </li>
      <li className={css.item}>
        <span className="label">Likes</span>
        <span className={css.quatitu}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
