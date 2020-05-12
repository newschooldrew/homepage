import React, {useContext} from 'react';
import './Project.styles.scss'
import {withRouter, Link} from 'react-router-dom'


const Project = ({title,routeName,items, description, match}) =>{
    console.log({title,routeName,items})
    return (
    <div className="project">
        <Link to={`${title}`}>{title}</Link>
        <div className="description">{description}</div>
        <br />
        {items && items.map( item => (
            <div key={item.id}>{item}</div>
        ))}<br />
    </div>
        )
    }

export default withRouter(Project)