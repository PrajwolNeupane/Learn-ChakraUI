
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Create from './pages/Create';
import NavBar from './Components/NavBar';


function App() {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact
          path="/">
          <Dashboard />
        </Route>
        <Route path="/create"><Create /></Route>
        <Route path="/profile"><Profile /></Route>
      </Switch>
    </Router>
  );
}

export default App;
