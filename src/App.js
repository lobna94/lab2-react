
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import MovieItem from './components/MovieItem/MovieItem';
import AddMovie from './components/AddMovie/AddMovie';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetais/MovieDetails'
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComponent/>
      <Switch>
      <Route exact path="/" component={AddMovie}/>

     <Route exact path="/Search" component={Search}/>
      <Route exact path="/Movies" component={Movies}/>
      <Route  exact path="/MovieDetails/:id"component={MovieDetails}/>
      </Switch>
      </Router>
     
     
      
      
    </div>
  );
}

export default App;
