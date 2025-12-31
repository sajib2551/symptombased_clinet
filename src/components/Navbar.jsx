
import { Link, NavLink } from 'react-router';
import { FcBusinessman } from "react-icons/fc";

const Navbar = () => {  
      const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
     ${isActive
        ? "bg-primary text-white shadow-md"
        : "text-gray-600 hover:bg-primary/10 hover:text-primary"
     }`;

  const navLinks = (
    <>
      <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
      <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
      <li><NavLink to="/knowledge" className={linkClass}>Knowledge</NavLink></li>
      <li><NavLink to="/detection" className={linkClass}>Detection</NavLink></li>
      <li><NavLink to="/bmi" className={linkClass}>BMI Calc</NavLink></li>
      <li><NavLink to="/blog" className={linkClass}>Blogs</NavLink></li>
    </>
  )
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Multiple-Cancer-Risk-Analysis</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
               <FcBusinessman className='w-20 h-20' />
            </div>
        </div>
    );
};

export default Navbar;