import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../Pages/Home';
import ProductPage from '../Pages/ProductsPage'
import About from '../Pages/About'
import CartPage from '../Pages/CartPage'
import DetailPage from '../Pages/DetailPage';

const AppRouter = () =>{
    return(
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Pages/ProductsPage/:productCategorie' element={ <ProductPage/>}/>
            <Route path='/Pages/About' element={ <About/>}/>
            <Route path='/Pages/CartPage' element={ <CartPage/>}/>
            <Route path='/Pages/DetailPage/:productId' element={ <DetailPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    )
}

export default AppRouter;