import React, {useContext, useEffect, useState} from 'react';
import Project from '../Project/Project.component'
import Context  from "../../context"
import './Homepage.styles.scss'
import Language from '../Language/Language.component'
import update from 'react-addons-update';
import _ from 'lodash'

const Homepage = () => {
  const {state,dispatch} = useContext(Context)
  const {projects,logos,showText} = state;
  const [textBool, setTextBool] = useState(true)
useEffect(()=>{
  {
    const activeLogos = logos.filter(logo =>{
    return logo.active == true
     })
     if(activeLogos.length > 0) {
      setTextBool(false)
     } else{
      setTextBool(true)
     }
}
},[logos])

  console.log(projects)
  let uniq = [];
  const output = (

    logos.reduce((acc, logo) => {
      if (logo.active) {
          Object.values(projects).forEach((proj) => {
             if (Object.values(proj.items).includes(logo.name)) {
               console.log(proj.avatar)
               
               acc.push(<Project avatar={proj.avatar} title={proj.title} imgUrl={proj.imgUrl} routeName={proj.routeName} items={proj.items} description={proj.description}/>);
             }
          });
          acc = acc.reduce(function (p, c) {
            if (!p.some(function (el) { return el.props.title === c.props.title; })) p.push(c);
            return p;
          }, []);
      }
        return acc
  }, [])
  
  )
  console.log(output)
  return (
    <>
  <div className="container">
    <Language />
  {/* <div className="homepage"> */}
  <div className={`${textBool ? " " : "clicked"} homepage`}>
    {textBool ? (<div className="hp_text">Click on the Languages to the Left to see the projects I've created </div>) : ''}
    <div className="output">{output }</div>

</div>
  </div>
  </>
)}

export default Homepage;