import React from 'react';

function ExprecienceBar(){
 return(
  <>
  <header className="experience-bar">
    <span> 0 XP</span>
    <div>
      <div style={{width:'60%'}}/>
      <span className="current-experience" style={{left:'50%'}}>300 xp</span>
    </div>
    <span>600 XP</span>
  </header>
  </>
 );
}

export default ExprecienceBar;