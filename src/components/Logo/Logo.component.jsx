import React, {useContext} from 'react'
import Context  from "../../context"
import './Logo.styles.scss'

const Logo = ({ ix, clickImage, active,src }) =>{
        // const style = active ? { backgroundColor: 'grey' } : {};
        return (
        <div className={`${active ? "active" : ""} logoContainer`}>
                <img
                  className="logoImg"
                  src={src}
                  onClick={() => clickImage(ix)}/>
        </div>
        )
}

export default Logo;
