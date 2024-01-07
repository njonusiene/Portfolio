import './loader.css'

import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <br /> <br />
      <div className='container'>
        <li>
          <Link to='/About'>
          <Arrow/>
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Loader;
