import './App.css';
import {Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">

      <Switch>
        <Route path='/about' component={About} />
        <Route exact path='/recipes' component={Recipes} />
        <Route path='/recipe/:id' component={SingleRecipe} />
        <Route exact path='/' component={Home} />

        <Route component={Default}/>
      </Switch>

    </div>
    </>
  );
}

export default App;
