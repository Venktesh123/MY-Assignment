import React from 'react'
import Login  from '../Login/Login'
function Home(props) {
  return (
    <div>
        <Login/>
      
      <h2>{props.name ?`welcome -${props.name}`: "Login Please"}</h2>
    </div>
  )
}

export default Home
