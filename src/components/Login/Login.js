import React from 'react';
import styles from './Login.module.css';
import InputControl  from '../InputControl/InputControl';
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
      
    <h1 className={styles.heading}>Login</h1>
     <InputControl label="Email" placeholder="Enter email address" />
      </div>

    </div>
  )
}

export default Login
