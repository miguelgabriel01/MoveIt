import React from 'react';
import styles from '../styles/components/ExperienceBar.module.css';

function ExprecienceBar(){
 return(
  <>
  <header className={styles.experienceBar}>
    <span> 0 XP</span>
    <div>
      <div style={{width:'60%'}}/>
      <span className={styles.currentExperience} style={{left:'50%'}}>300 xp</span>
    </div>
    <span>600 XP</span>
  </header>
  </>
 );
}

export default ExprecienceBar;