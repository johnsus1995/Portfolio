import "./header.scss";
import {Link, useLocation, withRouter} from 'react-router-dom'
import { useState } from "react";
function Header() {
  
  const location = useLocation();
  const [flag,setFlag]=useState(false)

  const avtivateFlag=()=>{
    setFlag(!flag)
    console.log(flag)
  }

  return (
    <div>
      <nav>
        <input type="checkbox" id="check"></input>
        <label htmlFor="check" className="checkbtn">
          <i onClick={avtivateFlag} className="fas fa-bars"></i>
        </label>
        {/* <label className="logo">thejohnjaison@yahoo.com</label> */}
          <div>
            <ul>
              <li><Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link></li>
              <li><Link className={location.pathname === '/about' ? 'active' : ''} to="/about">About</Link></li>
              <li><Link className={location.pathname === '/works' ? 'active' : ''} to="/works">My Works</Link></li>
            </ul>
          </div>
          {/* <div className="slider">

          </div> */}
      </nav>
    </div>
  );
}

export default withRouter(Header);
