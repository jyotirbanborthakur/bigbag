import { Fragment } from 'react'
import '../navigation/navigation.style.scss'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../../assets/crown.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>

                <Link className='logo-container' to="/">
                    <Logo className='logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to="/shop">shop</Link>
                    <Link className='nav-link' to="/sign-in">Sign In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>)
}

export default Navigation