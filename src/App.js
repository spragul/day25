import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loginpage } from './pages/login';
import { Register } from './pages/Register';
import { CardCom } from './components/cards';
import { Forgot } from './pages/Forgot';
import { Pageerror } from './pages/404page';
import { BlankPage } from './pages/Blankpage';
import { AnimationUtility } from './utilities/animation';
import { BorderUtilities } from './utilities/border';
import { ColorUtilities } from './utilities/colors';
import { OtherUtilities } from './utilities/other';
import { Buttontype } from './components/butttons';
import DatatablePage from './table/table1';
import { Dashboard } from './components/dashboard';
import { CombinedChart } from './chart/combinechart';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path='/button'>
          <Buttontype />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Loginpage />
        </Route>
        <Route path="/forgot">
          <Forgot />
        </Route>
        <Route path="/error">
          <Pageerror />
        </Route>
        <Route path='/blankPage'>
          <BlankPage />
        </Route>
        <Route path='/animation'>
          < AnimationUtility />
        </Route>
        <Route path='/border'>
          <BorderUtilities />
        </Route>
        <Route path='/color'>
          <ColorUtilities />
        </Route>
        <Route path='/other'>
          <OtherUtilities />
        </Route>
        <Route path='/table'>
          <DatatablePage />
        </Route>
        <Route path='/card'>
          <CardCom />
        </Route>
        <Route path='/chart'>
          <CombinedChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
