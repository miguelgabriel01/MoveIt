import CompletChallenges from '../components/CompletedChallenges';
import ExpirienceBar from '../components/ExpirienceBar';
import Profile from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import CompletedChallenges from '../components/CompletedChallenges';
import Coundown from '../components/Countdown';
import Head from 'next/head';

export default function Home() {
  return (
   <>
   <Head>
     <title>Inicio | Move.It</title>
   </Head>
       <div className={styles.container}>
       <ExpirienceBar />

         <section>
           <div>
           <Profile />
           <CompletedChallenges />
           <Coundown />
             </div>
             <div>

           </div>
         </section>
    </div>
   </>
  );
}
