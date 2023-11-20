import React from 'react'
import {getDatabase,ref,set} from "firebase/database";
import {app} from '../firebase';
import { Link } from 'react-router-dom';
import styles from "./Firedata.module.css";

function Firedata() {
    
  return (
    <div className={styles.actionList}>
      <nav>
      <ul className={styles.actionUl}>
        <li className={styles.liTag}>
          <Link className={styles.linkTag} to="/">Home</Link>
        </li>
        <li className={styles.liTag}>
          <Link className={styles.linkTag} to="/add/list">Add List Item</Link>
        </li>
        <li className={styles.liTag}>
          <Link className={styles.linkTag} to="/show/list">Show List Item</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Firedata
