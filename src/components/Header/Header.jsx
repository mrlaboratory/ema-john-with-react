import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-[#1C2B35] text-white">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Ema John</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Order</a></li>
            <li><a>Order Preview</a></li>
            <li><a>Manage Inventory</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>
      </div>
    );
};

export default Header;