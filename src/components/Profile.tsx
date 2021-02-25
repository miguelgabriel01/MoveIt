import styles from '../styles/components/Profile.module.css';

function Profile(){
  return(
   <div className={styles.profileContainer}>
     <img src="https://github.com/miguelgabriel01.png" alt="Usuario"/>
     <div>
       <strong>Miguel gabriel</strong>
       <p>Level 10</p>
     </div>
   </div>
  );
}

export default Profile;