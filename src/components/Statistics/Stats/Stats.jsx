import css from './Stats.module.css';
import { StatItem } from './StatItem/StatItem';

export const StatList = ({ stats }) => {
  return (
    <ul className={css.statList}>
      <StatItem stats={stats} />
    </ul>
  );
};
