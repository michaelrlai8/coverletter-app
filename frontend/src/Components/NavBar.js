import React from 'react';
import Button from './Button';
import { Link, NavLink } from 'react-router-dom';

const linkStyle = 'text-gray-600 decoration-0 hover:text-black';
const activeStyle = ({ isActive }) => (isActive ? 'text-blue-700' : '');

const NavBar = () => {
  return (
    <div className='sticky top-0 border-b border-solid border-gray-300'>
      <nav className='mx-auto flex max-w-7xl justify-between bg-white px-5 py-3 text-gray-600'>
        <Link
          to='/'
          className='flex items-center text-2xl font-bold text-black decoration-0'
        >
          TurboCover
        </Link>
        <ul className='flex list-none items-center gap-6 text-sm'>
          <li className={linkStyle}>
            <NavLink to='/' className={activeStyle}>
              Home
            </NavLink>
          </li>
          <li className={linkStyle}>
            <NavLink to='/create' className={activeStyle}>
              Create
            </NavLink>
          </li>
          <li className={linkStyle}>
            <NavLink to='/about' className={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <Link>
              <Button to='/about'>Login</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
