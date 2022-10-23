import css from './TransactionItem.module.css';

export const TransactionItem = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className={css.tableRow} key={id}>
          <td className={css.tableData}>{type}</td>
          <td className={css.tableData}>{amount}</td>
          <td className={css.tableData}>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
};
