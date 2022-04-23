const ItemListContainer = ({greeting}) =>{
    return(
    <div class="relative">
        <div class="container inset-x-0 bottom-0 mx-auto px-8 py-6 fixed buttom-0 left-0 right-0">
            <button class="bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Bienvenido 👋</button> 
            <p class="font-medium text-2xl px-8 py-6">{greeting}</p> 
        </div>
    </div>
    )
}
export default ItemListContainer;
 