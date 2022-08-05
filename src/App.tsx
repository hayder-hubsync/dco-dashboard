import * as React from 'react';
import { Home } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Home />
    </>
  );
};

export default App;
