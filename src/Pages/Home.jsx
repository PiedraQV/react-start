import Header from "../components/Header";
import ItemListContainer from '../components/ItemListContainer'

const Home = () =>{
    return(
        <body>
        <Header/>
        <h1>Productos Disponibles</h1>
        <ItemListContainer/>
        </body>
    )
}

export default Home;