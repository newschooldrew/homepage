import React, {useContext} from 'react'
import './Navbar.styles.scss'
import {Link, withRouter} from 'react-router-dom'
import Context from '../../context'

const Navbar = ({history}) =>{
    console.log(history.location.pathname)
    const {dispatch} = useContext(Context)
    const handleClick = e =>{
        dispatch({type:"CLEAR_PROJECTS"})
        console.log("cleared projects")
    }
    return (
    <>
        <nav className="navbar">
            <ul className="navigation">
                <Link to="/">
                    {history.location.pathname !== '/'   ? (
                        <li onClick={e => handleClick}>Return Home</li>) :
                        (<li>Home</li>
                    )}
                </Link>
                <Link to="resume">
                    <li>Resume</li>
                </Link>
            </ul>
        </nav>
    </>
)}

export default withRouter(Navbar);