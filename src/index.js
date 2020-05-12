import React, { useCallback, useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage/Homepage.component';
import Projectpage from './components/Projectpage/Projectpage.component';
import Navbar from './components/Navbar/Navbar.component';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Context from './context'
import Reducer from './reducer'

const Routes = () =>{
  const INITIAL_STATE = useContext(Context);
  const [state,dispatch] = useReducer(Reducer, INITIAL_STATE)
  return (
  <BrowserRouter>
    <Context.Provider value={{state,dispatch}}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/:project" component={Projectpage}/>
        <Redirect to='/' />
      </Switch>
    </Context.Provider>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);