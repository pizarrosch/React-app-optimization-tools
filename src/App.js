import React, {useState, useCallback} from 'react';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import s from './components/UI/Button/Button.module.css';

import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('App running')

  const handleButtonClick = useCallback(() => {
    if(allowToggle) {
      setShowParagraph((prevState) => !prevState);
    }
  }, [allowToggle]);

  function handleAllowToggle() {
    setAllowToggle(true);
  }

  return (
      <div className="app">
        <h1>Hi there!</h1>
        <DemoOutput show={showParagraph}/>
        <Button onClick={handleAllowToggle} className={s.allowButton}>Allow Toggle</Button>
        <Button onClick={handleButtonClick}>Click here!</Button>
      </div>
  );
}

export default App;
