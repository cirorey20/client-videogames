import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import NewGame from './components/NewGame';
import Dashboard from './components/Dashboard';
import Edit from './components/Edit';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/home' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/videogame/:id' component={Details} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/created' component={NewGame}/>
          <Route path='/edit' component={Edit}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
