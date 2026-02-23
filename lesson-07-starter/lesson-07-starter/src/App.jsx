

import './App.css';

import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';

function App() {
  return (
    <>
      <Header tagline="Find the right resources, right away" />
      <Filters />
      <Results />
    </>
  );
}

export default App;
