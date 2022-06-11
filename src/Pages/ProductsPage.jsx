import ItemListContainer from "../components/ItemListContainer";
const ProductPage = () =>{
    return(
        <div className="bg-indigo-50 p-10">
        <h1 class="m-5 container-xl font-semibold text-lg text-indigo-900 p-3 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex" role="alert">-- Página de productos --</h1>
        <ItemListContainer/>
        </div>
    )
}

export default ProductPage;