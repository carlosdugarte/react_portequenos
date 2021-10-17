import './App.css';
import { NavBar } from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/container/ItemListContainer';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { NosotrosView } from './components/nosotrosView/NosotrosView';
import { HomeView } from './components/homeView/HomeView';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route exact path="/">                
                <HomeView/>
            </Route>
            <Route exact path="/productos/:categoriaId">
                <ItemListContainer />
            </Route>
            <Route exact path="/productos">
                <ItemListContainer />
            </Route>
            <Route exact path="/detalle/:itemId">
                <ItemDetailContainer />
            </Route>
            <Route exact path="/nosotros">
                <NosotrosView />
            </Route>
            <Route exact path="/carrito">
                <h1>Carrito</h1>
            </Route>
            <Route path="*">
                <Redirect to="/" />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
