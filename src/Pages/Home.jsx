import Header from "../components/Header";
import ItemListContainer from '../components/ItemListContainer'

const Home = () =>{
    return(
        <body>
        <Header/>
        <h1 class="m-5 container-xl bg-white font-semibold text-lg text-indigo-900 p-3 bg-indigo-900 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex" role="alert">-- Productos Disponibles --</h1>
        <ItemListContainer/>
        </body>
    )
}

export default Home;