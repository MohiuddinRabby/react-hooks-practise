import React, { createContext } from 'react';
import StateOne from './components/01-use-state/StateOne';
import StateTwo from './components/01-use-state/StateTwo';
import StateThree from './components/01-use-state/StateThree';
import StateFour from './components/01-use-state/StateFour';
import StateFive from './components/01-use-state/StateFive';
import EffectOne from './components/02-use-effect/EffectOne';
import EffectTwo from './components/02-use-effect/EffectTwo';
import EffectThree from './components/02-use-effect/EffectThree';
import DataFetching from './components/02-use-effect/DataFetching';
import DataFetching2 from './components/02-use-effect/DataFetching2';
import ContextOne from './components/03-use-context/ContextOne';

export const NameContext = createContext();
const App = () => {
  return (
    <div>
      <h1>Hooks-practise</h1>
      <NameContext.Provider value={'mohiuddin'}>
      {/* <StateOne /> */}
      {/* <StateTwo/> */}
      {/* <StateThree /> */}
      {/* <StateFour /> */}
      {/* <StateFive /> */}
      {/* <EffectOne/> */}
      {/* <EffectTwo /> */}
      {/* <EffectThree/> */}
      {/* <DataFetching /> */}
      {/* <DataFetching2/> */}
      <ContextOne/>
      </NameContext.Provider>
    </div>
  );
}

export default App;
