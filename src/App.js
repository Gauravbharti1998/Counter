import './App.css';
import { useState, useEffect} from 'react';
import  sound from './clicksound.mp3' 

function App() {

  const [value, setValue] = useState(0);
  const increment = () => {
    playAudio(sound);
    setValue(value + 1);
  }
  const decrement = () => {
    if (value > 0){
      playAudio(sound);
      setValue(value - 1);
    }
  }
  const reset = () => {
    setValue(0);
  }
  //for sounds
  function playAudio(sound) {
    new Audio(sound).play();
  }
  // for clock 
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()

  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <div className='body'>
      <h1>The Counter Application </h1>
      <div>
        <button className='addbtn' onClick={increment}>+ </button>
      </div>
      <div>
        <h2>{value}</h2>
      </div>

      <div>
        <button className='addbtn' onClick={decrement} > - </button>
      </div>
      <div>
        <button className='sbbtn' onClick={reset} > Reset </button>
      </div>
      <h4> Your life is running ! </h4>
      <div className='clock'>
        <span>{convertToTwoDigit(time.hours)}:</span>
        <span>{convertToTwoDigit(time.minutes)}:</span>
        <span>{convertToTwoDigit(time.seconds)}</span>
        <span>{time.hours >= 12 ? ' PM' : ' AM'}</span>
      </div>
    </div>

  );
}

export default App;
