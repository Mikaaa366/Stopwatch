import styles from './StopWatch.module.scss';
import React, { useState, useEffect } from "react";
import Button from '../Buttons/Button';


const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    return (
        <div className={styles.stopWatch}>
          <div className="numbers">
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time/10 ) % 100)).slice(-2)}</span>
          </div>
            <Button onClick={() => setRunning(true)}>Start</Button>
            <Button onClick={() => setRunning(false)}>Stop</Button>
            <Button onClick={() => setTime(0)}>Reset</Button>       
        </div>
      );
};

export default StopWatch;