import css from './StatItem.module.css';
import PropTypes from 'prop-types';

export const StatItem = ({ stats }) => {
  return (
    <>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={css.item}>
          <span className="label">{label}</span>
          <span className={css.parcentage}>{percentage}%</span>
        </li>
      ))}
    </>
  );
};

StatItem.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
