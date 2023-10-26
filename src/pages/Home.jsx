import React, { useRef } from 'react';
import Layout from '../components/Layout';
import Main from '../components/Main';
import List from '../components/List';
import Animal from '../components/Animal';
import ScrollButton from '../components/ScrollButton';

function Home() {
  const scrollRef = useRef([]);
  return (
    <Layout>
      <ScrollButton scrollRef={scrollRef} />
      <Main ref={scrollRef} />
      <List ref={scrollRef} />
      <Animal ref={scrollRef} />
    </Layout>
  );
}

export default Home;
