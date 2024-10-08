import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    const links = <>
        <li><NavLink to={'/'}><h3 className='font-semibold text-white'>Home</h3></NavLink></li>
        <li><NavLink to={'/meals'}><h3 className='font-semibold text-white'>Meals</h3></NavLink></li>
        <li><NavLink to={'/upcoming'}><h3 className='font-semibold text-white'>Upcoming</h3></NavLink></li>
        <li><NavLink to={'/checkout'}><h3 className='font-semibold text-white'>Checkout</h3></NavLink></li>
    </>

    return (
        <div className="bg-[#17161C]">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    <Link to={'/'}>
                        <img src={Logo} className='w-20' alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end relative z-[1000]">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <Link to={'/dashboard'}>Dashboard</Link>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={logOut}><a>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <Link className='btn bg-green-500 hover:bg-green-400 border-none text-white' to={'/login'}>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header