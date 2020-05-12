import React,{useContext} from 'react'
import Context from '../../context'
import {withRouter} from 'react-router-dom'
import './Projectpage.styles.scss'

const Projectpage = ({match}) => {
    const {state} = useContext(Context)
    const {projects} = state;
    const projectMatch = projects[match.params.project];
    const {url} = projectMatch
    return(
        <>
        <iframe 
            className="iframe"
            src={url}></iframe>
        </>
    )
}

export default withRouter(Projectpage)