import React from 'react';
import Village from './components/Village'
import './App.css';

function App() {
  return (
    <div className="App">
      A村<Village villageId={1} villagerLen={9} werewolfLen={3} />
      B村<Village villageId={2} villagerLen={9} werewolfLen={3} />
      C村<Village villageId={3} villagerLen={9} werewolfLen={3} />
    </div>
  );
}

export default App;
