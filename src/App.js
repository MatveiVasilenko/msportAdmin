import React from 'react';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './routes/Home'
import Admin from './routes/Admin'
import Trains from './routes/Trains'
import Menu from './modules/Menu/Menu'
import {THEME} from './theme.js'

function App() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{	width: '15%',
      				backgroundColor: THEME.MAIN_COLOR, 
      				height: '100vh', 
      				padding: '20px'}}
      				>
      	<Menu />
      </div>
      <div style={{width: '85%', padding: '20px'}}>
      	<Switch>
      	  <Route path='/' exact component={Home} />
      	  <Route path='/admin' component={Admin} />        
      	  <Route path='/trains' component={Trains} />        
      	</Switch>
      </div>
    </div>
  );
}

export default App;
