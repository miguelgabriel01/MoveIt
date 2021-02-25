import styles from '../styles/components/Countdown.module.css';
import { useState, useEffect} from 'react';

function Countdown(){
  
  const [time, setTime] = useState(25 * 60);
  const [active,setActive] = useState(false);//o valor do click do botão sempre vai iniciar como falso

  const minutes = Math.floor(time / 60);//arredonda o valor
  const seconds = time % 60;
  const [minuteLeft,minuteRight] = String(minutes).padStart(2,'0').split('');//divide a string com dois indices em dois eçlementos e caso não temnha, coloca um 0 no lugar
  const [secondsLeft,secondsRight] = String(seconds).padStart(2,'0').split('');//divide a string com dois indices em dois eçlementos e caso não temnha, coloca um 0 no lugar

  function startCountdown(){
   setActive(true);//quando o usuario clickar, o valor do estado vai para ativo
  }

  useEffect(() => {
    console.log(active);

    if(active){//verifica se esta ativo
      setTimeout(() => {
        setTime(time -1);//retira de um em um segundos
      }, 1000);
    }
  },[active,time]);//ativa a função se existir tempo e estiver ativo
  return(
    <div>
    <div className={styles.countdownContainer}>
    <div>
    <span>{minuteLeft}</span>
    <span>{minuteRight}</span>
    </div>
    <span>:</span>
    <div>
    <span>{secondsLeft}</span>
    <span>{secondsRight}</span>
    </div>

    </div>
    <button 
    type="button"
    className={styles.countdownButton}
    onClick={startCountdown}
    >
  Iniciar um ciclo
</button>
     </div>
  );
}

export default Countdown;