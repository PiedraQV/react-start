import './App.css';
import AppRouter from './routes/AppRouter';
//import dataToFirestore from './utilidades/dataToFirestore'; <button onClick={dataToFirestore}>Subir datos</button>//

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
