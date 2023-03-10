import { Profile } from "./Profile/Profile";
import user from './Data/user.json'

import { Statistics } from "./Statistics/Statistics";
import data from './Data/data.json'

import { FriendList } from "./FriendList/FriendList";
import friends from './Data/friends.json'

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './Data/transactions.json'

export const App = () => {
  return (
    <div style={{
      maxWidth: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
      }}>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
