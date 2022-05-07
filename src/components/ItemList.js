import { Item } from "../components/Item";

const ItemList = ({products}) =>{
    return(
        <div className='flex flex-wrap -m-4'>
        {products.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
        ))}
        </div>
    )
};

export default ItemList;