import styles from './Countdown.module.scss'
import Countdown  from 'react-countdown';

export default function Countdown2({timeLeft}){

return(
    <div className={styles.counter}>
       <Countdown date={Date.now() + timeLeft}/>
    </div>
)

}