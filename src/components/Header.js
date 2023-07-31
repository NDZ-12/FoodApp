import React,{useState} from 'react'
import { CDN_LOGO } from '../utils/constants'
const Header = () => {

  const[loginbtnName,setloginbtnName]=useState('Login');
    return (
        <div className="header">
          <div className="logo-container">
            <img
              className="logo"
              alt="logo"
              src={CDN_LOGO}
            />
          </div>
          <div className="nav-items">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Cart</li>
              <button className='Login' onClick={()=>{
              loginbtnName==='Login'
              ? setloginbtnName('Logout')
              :setloginbtnName('Login');
              }}>{loginbtnName}</button>
            </ul>
          </div>
        </div>
      );
}

export default Header