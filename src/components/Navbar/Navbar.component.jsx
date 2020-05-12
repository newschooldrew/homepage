import React from 'react'
import './Navbar.styles.scss'
import {Link, withRouter} from 'react-router-dom'

const Navbar = (history) =>{
    console.log(history.location.pathname)
    return (
    <>
        <nav className="navbar">
            <ul className="navigation">
                <Link to="/">
                    {() => history.location.pathname == '/ecommerce' && (
                        <li>Return Home</li>
                    )}
                    <li>Projects</li>
                </Link>
                <li>Resume</li>
                <li>Individual Links</li>
            </ul>
        </nav>
    </>
)}

export default withRouter(Navbar);