import React, {useState, useContext} from 'react'
import Context  from "../../context"
import './Language.styles.scss'
import Logo from '../Logo/Logo.component'
import update from 'react-addons-update';
import logos from '../../data/IMG_DATA'

const Language = () =>{
    const {state,dispatch} = useContext(Context)
    function getImage() {
        return { active: false };
    }
    // const [images,setImages] = useState(_.times(6, getImage))
    const [images,setImages] = useState(logos)
    console.log(images)
      const clickImage = (ix) => {
        const newData = update(images, {
          [ix]: { $apply: x => ({ id:x.id,name:x.name, imgUrl:x.imgUrl,active: !x.active}) }
        })
        setImages(newData);
        dispatch({type:"SET_LOGOS",payload:newData})
      }
      return (
        <aside className="aside">
        <p classname="asideTxt">CLICK ON A LANGUAGE</p>
        <div className="logoContainer">
            { images.map((image, ix) =>
                <Logo
                  key={image.id}
                  ix={ix}
                  name={image.name}
                  src={image.imgUrl}
                  active={image.active}
                  clickImage={clickImage} />) }
          </div>
            </aside>
        );
}

export default Language;



