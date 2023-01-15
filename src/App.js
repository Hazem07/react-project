
import { Route, Switch } from 'react-router';
import './App.css';
import Navbar from "./component/Navbar";
import Home from "./Pages/Home"; 
import Try from './component/Try';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Home/Try/:id" component={Try}/>
        {/* <Route path="/Try"/> */}
        <Route path="/*" component={Error} />

      </Switch>
    </div>
  );
}

export default App;
