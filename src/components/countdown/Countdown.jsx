import styles from './Countdown.module.scss'
import Countdown  from '../../../node_modules/react-countdown';

export default function Countdown({timeLeft}){

return(
    <div className={styles.counter}>
       <Countdown date={Date.now() + timeLeft}/>
    </div>
)

}