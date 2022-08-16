import React from 'react'
import Layout from '../../components/layout/Layout'
import './login.css'


const Login = () => {
  return (
     <Layout data="Contact">
      <div className='bg' >
      <div  className="App"  >
       <h1>CONTACT DETAILS</h1>
       <label>First name: </label><br></br> 
      <input type="text" name='First name'  /><br></br>
       <label>Last name: </label><br></br>
       <input type="text" name='Lname'  /><br></br>
       <label>Email:    </label><br></br>
       <input type="email" name='Email' /><br></br>
       <label for="gender">Gender: </label><br></br>  
       <input type="radio" name="gender" value="Male" />Male  
       <input type="radio" name="gender" value="Female" />Female<br></br>  
       <button id='sub' >Submit</button>
       

       </div>
    </div>
    </Layout>
    
  )
}


export default Login
 
