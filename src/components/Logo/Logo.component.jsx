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

// const {state,dispatch} = useContext(Context);
// const {logos} = state;
// console.log(logos)

// const handleClick = (e) =>{
//     const {name} = e.target;
//     dispatch({type:"ADD_ITEM",payload:name})
//     console.log(state.logos[name].active)
//  }
//     return (
//         <div >
//             <img src={imgUrl} name={name} onClick={state => state => !state.active} className={active ? "active" : "inactive"}/>
//         </div>
//       )