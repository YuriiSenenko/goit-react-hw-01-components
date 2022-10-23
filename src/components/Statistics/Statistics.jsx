import css from './Statistics.module.css';
import { StatList } from './Stats/Stats';
import { Title } from './Title/Title';

export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
      <Title text="Upload stats" />
      <StatList stats={stats} />
    </section>
  );
};
