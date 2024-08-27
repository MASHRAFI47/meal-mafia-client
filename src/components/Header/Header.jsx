import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const Header = () => {
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
                <div className="navbar-end">
                    <Link className='btn bg-green-500 hover:bg-green-400 border-none text-white' to={'/login'}>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Header