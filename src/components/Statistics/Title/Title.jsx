import css from './Title.module.css';
import PropTypes from 'prop-types';

export const Title = ({ text }) => {
  return <>{text && <h2 className={css.title}>{text}</h2>}</>;
};

Title.propTupes = {
  test: PropTypes.number,
};
