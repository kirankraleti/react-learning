import React, { useState, useCallback } from 'react';
import Title from './components/title';
import Count from './components/count';
import CountButton from './components/countButton';
import Age from './components/age';
import AgeButton from './components/ageButton';

const App = () => {

  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  // if we use like this, the count button never gets re-rendered as it is not using any outside properties
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount+1);
  }, []);

  // if we use like this, the count button gets re-rendered as it is using outside properties like age
  const incrementAge = useCallback(() => {
    setAge(age+1);
  }, [age]);

  return (
    <>
      <Title/>
      <Count count={count}/>
      <CountButton handleCount={incrementCount}/>
      <Age age={age}/>
      <AgeButton handleAge={incrementAge}/>
    </>
  );
}

export default App;
