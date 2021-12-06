import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NosotrosView } from './components/NosotrosView/NosotrosView';
import { HomeView } from './components/HomeView/HomeView';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';

function App() {
  return (
    <div>
      <CartProvider>
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
                    <CartView />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
          </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
