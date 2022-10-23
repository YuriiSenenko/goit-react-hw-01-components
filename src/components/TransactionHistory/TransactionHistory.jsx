import { Head } from './Head/Head';
import css from './TransactionHistory.module.css';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <Head items={items} />
      <TransactionItem items={items} />
    </table>
  );
};
