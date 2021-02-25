import styles from '../styles/components/CompletChallenges.module.css';

function CompletChallenges (){
  return(
    <div className={styles.completeChallangesContainer}>
      <span>Desafios completos</span>
      <span>275</span>
    </div>
  );
}

export default CompletChallenges;