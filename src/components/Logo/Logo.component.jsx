import React, {useContext} from 'react'
import Context  from "../../context"
import './Logo.styles.scss'

const Logo = ({ ix, clickImage, active,src }) =>{
        const style = active ? { border: '1px solid #021a40' } : {};
        return <img
                  style={style}
                  src={src}
                  onClick={() => clickImage(ix)}/>;
}

export default Logo;
