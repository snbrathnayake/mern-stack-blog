import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from "redux/actions/authAction";

const Navbar = (props) => {

    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.userSignin);
    const { userInfo } = user;

    const dispatch = useDispatch();

    const menuToggleHandler = (e) => {
        setShowMenu(!showMenu)
    }

    const pressedNavItem = () => {
        setShowMenu(false)
    }

    const userSignout = () => {
        dispatch(signOut());
    }

    useEffect(() => {
        setShowMenu(false)
    }, [])

    return (
        <header>
            <div className="container">
                <div className="row navbar">
                    <div className="brand">Stack <span>Bloggy</span></div>
                    <div className="menu-item">
                        <ul className={`nav-list-content ${showMenu ? 'active' : ''}`}>
                            <li className="nav-item"><Link to="/" className="nav-link" onClick={pressedNavItem}>home</Link></li>
                            <li className="nav-item"><Link to="/featured-blog-post" className="nav-link" onClick={pressedNavItem}>featured</Link></li>
                            <li className="nav-item"><Link to="/popular-blog-post" className="nav-link" onClick={pressedNavItem}>popular</Link></li>
                            <li className="nav-item"><Link to="/element-blog-content" className="nav-link" onClick={pressedNavItem}>element</Link></li>
                            <li className="nav-item"><Link to="/contact-us" className="nav-link" onClick={pressedNavItem}>contact</Link></li>

                            <li className="nav-item">
                                {
                                    userInfo && userInfo.user ? (
                                        <div className="dropdown">
                                            <Link to="#">
                                                <span id="userLoggedName"><i className="fa fa-user-o" aria-hidden="true"></i>{' '}{userInfo.user.name}</span>{' '}
                                                <i className="fa fa-caret-down"></i>
                                            </Link>
                                            {/* dropdown items */}
                                            <ul className="dropdown-content">
                                                <li>
                                                    <Link className="dropdown-link" to={`/profile/${userInfo.user.username}`}>Profile</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-link" to="/new-post">New Post</Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-link" to="#signout" onClick={userSignout}>Sign Out</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link to="/login" className="nav-link" onClick={pressedNavItem}>login</Link>
                                    )
                                }

                            </li>
                            <li className="nav-item">
                                {userInfo && userInfo.user.role === 100 && (
                                    <div className="dropdown">
                                        <Link to="#admin" className="dropdown-link admin">
                                            Admin <i className="fa fa-caret-down"></i>
                                        </Link>
                                        <ul className="dropdown-content">
                                            <li>
                                                <Link className="dropdown-link" to="/dashboard">Dashboard</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-link" to="/manage-content">Manage Content</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </li>
                        </ul>
                        <div className="mobile-menu">
                            <i className="fa fa-bars" aria-hidden="true" onClick={menuToggleHandler}></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;