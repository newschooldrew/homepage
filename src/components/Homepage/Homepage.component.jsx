import React, {useContext, useEffect} from 'react';
import Project from '../Project/Project.component'
import Context  from "../../context"
import './Homepage.styles.scss'
import Language from '../Language/Language.component'
import _ from 'lodash'

const Homepage = () => {
  const {state} = useContext(Context)
  const {projects,logos} = state;
  console.log(projects)
  let uniq = [];
  const output = (

    logos.reduce((acc, logo) => {
      if (logo.active) {
          Object.values(projects).forEach((proj) => {
             if (Object.values(proj.items).includes(logo.name)) {
               console.log(acc)
               
               acc.push((<Project title={proj.title} routeName={proj.routeName} items={proj.items} description={proj.description}/>));
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
  <div className="homepage">
{output}

</div>
  </div>
  </>
)}

export default Homepage;

// {Object.values(projects).map(({id,...props}) => (
//   <Project key={id} {...props}  />
// )
// )
// }