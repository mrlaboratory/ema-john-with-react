import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-[#1C2B35] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Ema John</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/orders'>Orders</NavLink></li>
            <li><NavLink to='/preview'>Order Preview</NavLink></li>
            <li><NavLink to='/manage'>Manage Inventory</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;