import React from 'react'
import {getDatabase,ref,set} from "firebase/database";
import {app} from '../firebase';
import { Link } from 'react-router-dom';
const db=getDatabase(app);

function Firedata() {
    const pushData=()=>{
        set(ref(db,'product/sale'),{
            id:1,
            product_name:"tablet",
            price:20000
        });
    };
  return (
    <div>
        FireBase Connect
      <button onClick={pushData}>Put Data</button>
      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add/list">Add List Item</Link>
        </li>
        <li>
          <Link to="/show/list">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Firedata
