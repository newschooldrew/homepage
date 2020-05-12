import React, {useContext, useEffect} from 'react';
import Project from '../Project/Project.component'
import Context  from "../../context"
import './Homepage.styles.scss'
import Language from '../Language/Language.component'
import _ from 'lodash'

const Homepage = () => {
  const {state} = useContext(Context)
  const {projects,logos} = state;

  useEffect(()=>{
    console.log(logos)
  },[logos])

  return (
    <>
    <div className="container">
    <Language />
    <div className="homepage">
    {/* {Object.values(logos).map(({active,id,name}) =>{
      return(
        Object.values(projects).map(({id,items}) => {
          
            console.log(Object.keys(items).filter(function(k){
                return items[k] == "sagas"
            }))
          return (<div> 
                    {items.map(item =>(
                      <div>{item}</div>
                    ))}
                  </div>
                )
          })
        )
      }

   )} */}
          {logos.map(logo => {

          // console.log(logo.active)

          let objs = Object.values(projects)
          let projs = Object.values(projects);
          // let filtered
          let filterTwo;
          let filteredValue;
          console.log(filterTwo)
          
          if(logo.active == true){
            // filtered = objs.filter( row => row.title == logo.name);
            console.log(logo.name)
            filterTwo = projs.filter(({items}) => Object.values(items).includes(logo.name))
            filteredValue = filterTwo[0]

        return(
              <Project 
                  key={filteredValue.id} 
                  title={filteredValue.title} 
                  description={filteredValue.description}
                  items={filteredValue.items} />
            )
          }

        }
      )
    }
    {/* <div>{filtered[0].title}</div> */}
       {/* {Object.values(projects).map(({id,...props}) => {
          return <Project key={id} {...props}  />
        }
      )
    } */}
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