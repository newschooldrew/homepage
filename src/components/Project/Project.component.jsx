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
    <div className="project">
        <div className="imgContainer">
            <img data-tip="preview of my project" onmouseover={() => showTooltip} className="thumbNail" src={avatar}/>
            <ReactTooltip />
        </div>
        <div className="details">
            <span className="description">{description}</span>
            <div className="logoContainer">
                {imgUrl && imgUrl.map( (img,idx) => {
                    console.log(imgUrl)
                    return (
                    <img className="logos" key={img.id} src={imgUrl[idx]} />
                    )}
                )}
            </div>
        </div>
    </div>
    </Link>        
        )
    }

export default withRouter(Project)