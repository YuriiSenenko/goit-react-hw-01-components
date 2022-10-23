import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from 'components/user.json';
import friends from 'components/friends.json';
import stats from 'components/data.json';
import transactions from 'components/transactions.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
