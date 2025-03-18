// import { useState } from 'react';
import './App.css';
// import GoButton from './GoButton';
// import GoLabel from './GoLabel';
import MovieCollection from './MovieCollection';

function App() {
  // const [goLevel, updateGo] = useState(1);
  // const incrementGo = () => updateGo(goLevel * 2);

  return (
    <>
      <MovieCollection />
      {/* <GoButton buttonFunc={incrementGo} />
      <br />
      <br />
      <GoLabel numToDisplay={goLevel} /> */}
    </>
  );
}

export default App;
