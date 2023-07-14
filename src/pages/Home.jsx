import React from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import List from '../components/List';
import Animal from '../components/Animal';

function Home() {
  return (
    <Layout>
      <Main />
      <List />
      <Animal />
    </Layout>
  );
}

export default Home;
