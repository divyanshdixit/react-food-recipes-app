import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/recipes' component={Recipes} />
        <Route path='/recipes/:id' component={SingleRecipe} />
        <Route path='/' component={Home} />

        <Route component={Default}/>
      </Switch>
    </div>
  );
}

export default App;
