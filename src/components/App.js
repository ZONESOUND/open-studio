import React, {useState}  from 'react';
import '../css/App.css';
import LandPage from './LandPage';
import Fade from './Fade';
import MicInput from './MicInput';
import EffectBox from './EffectBox';

function App() {
  const [landing, setLanding] = useState(true);
  const [transmit, setTransmit] = useState(false);
  const [receive, setReceive] = useState(false);
  let selectMode = (mode) => {
    setLanding(false);
    if (mode === 0) setTransmit(true);
    else setReceive(true);
    console.log('select: '+ mode);
  }

  return (
    <div>
      <Fade show={landing}>
        <LandPage select={selectMode}/>
      </Fade>
      <Fade show={transmit}>
        <MicInput/>
      </Fade>
      <EffectBox show={receive} />
    </div>
  );
}

export default App;