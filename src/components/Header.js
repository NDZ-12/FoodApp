import React,{useState} from 'react'
import { CDN_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom';

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
             <li> <Link to="/" >Home</Link></li>
             <li><Link to="/about" >About</Link></li> 
             <li><Link to="/contact" >Contact us</Link></li> 
             <li><Link to="/" >Cart</Link></li>

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

export default Header;