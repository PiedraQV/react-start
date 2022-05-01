import { products } from './Item';

export const getItems = ( )=> {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=> resolve (products), 2000);
    });
};