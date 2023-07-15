import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './shared/Router';
import './style/reset.css';
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap');
</style>;

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
