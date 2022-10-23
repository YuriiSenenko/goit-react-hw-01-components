import css from './Head.module.css';

export const Head = () => {
  return (
    <thead className={css.head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  );
};
