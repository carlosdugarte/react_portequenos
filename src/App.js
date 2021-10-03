import './App.css';
import { NavBar } from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/container/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo="Bienvenidos a la website de Portequeños"/>
    </div>
  );
}

export default App;
