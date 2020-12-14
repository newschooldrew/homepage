import React, {useContext, useState} from 'react';
import './Project.styles.scss'
import {withRouter, Link} from 'react-router-dom'
import ReactTooltip from "react-tooltip";
import Context from '../../context'

const Project = ({avatar,title,routeName,items, description, match, imgUrl}) =>{
    console.log({title,routeName,items})
    const {state} = useContext(Context);
    const {showTooltip} = state;
    // const [hover,setHover] = useState()
    return (
<Link style={{ textDecoration: 'none' }} to={`${title}`}>
    <div data-tip={`click here to see my ${title} project`} className="project">
    <ReactTooltip />
        <div className="imgContainer">
            <img className="thumbNail" src={avatar}/>
        </div>
        <div className="details">
            <span className="description">{description}</span>
            
            <div className="detailsContainer">
                <p className="logoTitle">Made With:</p>
                <div className="logosContainer">
                {imgUrl && imgUrl.map( (img,idx) => {
                    console.log(imgUrl)
                    return (
                    <img className="logos" key={img.id} src={imgUrl[idx]} />
                    )}
                )}
                </div>
            </div>
        </div>
    </div>
    </Link>        
        )
    }

export default withRouter(Project)