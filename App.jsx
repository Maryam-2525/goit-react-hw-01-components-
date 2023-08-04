import React from 'react';
import Friends from 'components/Friends';
import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import Transaction from 'components/Transaction';
import user from './data/user.json';

const App = () => {
  return (
    <div>
      <Profile data={user} />
      <Friends />
      <Statistics />
      <Transaction />
    </div>
  );
};

export default App;