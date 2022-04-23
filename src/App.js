import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <Header></Header>
        <ItemListContainer greeting='Ese fue un botón saludando'></ItemListContainer>
    </div>
  );
}

export default App;
