// import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
    return(

  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">myTransfers</h1>
      <ul className="nav-menu">
        <li className="nav-link">
          {/* <Link className="nav-link" to="/"> */}
          Destinations
          {/* </Link> */}
        </li>
        <li className="nav-link">
          {/* <Link className="nav-link" to="/bookings"> */}
          My Bookings
          {/* </Link> */}
        </li>
        <li className="nav-link">
          {/* <Link className="nav-link" to="/agencies"> */}
          Travel Agencies
          {/* </Link> */}
        </li>
        <li className="nav-link">
          {/* <Link className="nav-link" to="/login"> */}
          <button className='log-button'>Login</button>
          
          {/* </Link> */}
        </li>
      </ul>
    </div>
  </nav>
)}

export default Header











