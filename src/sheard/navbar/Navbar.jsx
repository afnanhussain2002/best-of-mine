import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user, logout} = useAuth()
  const handleLogout = () =>{
     logout()
  }
    const navItems = <>
      <li><Link className="border mr-2 border-primary-color"to={'/about'}>About</Link></li>
      <li><Link className="border mr-2 border-primary-color"to={'/contact'}>Contact</Link></li>
      <li><Link className="border mr-2 border-primary-color" to={'/'}>Home</Link></li>
              
    </>
    return (
        <div className="navbar bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-primary-color font-bold">
             {navItems}
            </ul>
          </div>
          <Link to={'/'}><Logo/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-primary-color font-bold">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
              <>
              
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src={user.photoURL ? user.photoURL : "https://tse2.mm.bing.net/th?id=OIP.A1O-vzsBENQZX_icVRjZdwHaHa&pid=Api&P=0&h=220"} />
                </div>
              </div>
              <button className="btn bg-primary-color text-white font-bold hover:bg-white hover:text-primary-color hover:border-primary-color" onClick={handleLogout}>Logout</button>
              </>
                
            
          
        :
            <Link to={'/login'} className="btn bg-primary-color text-white font-bold hover:bg-white hover:text-primary-color hover:border-primary-color">Login</Link>
          }
        </div>
      </div>
    );
};

export default Navbar;