import { Profile } from "./Profile/Profile";
import user from './Data/user.json'

import { Stats } from "./Stats/Stats";
import { FriendList } from "./FriendsList/FriendsList";
import { Transactions } from "./Transactions/Transactions";

export const App = () => {
  return (
    <div  style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  <Stats />
  <FriendList />
      <Transactions />
    </div>
  );
};
