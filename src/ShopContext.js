import { createContext, useContext, useReducer } from "react"
import shopReducer, { intialState } from "./shopReducer";


const ShopContext = createContext(intialState)


export const ShopProvider = ({children})=>{

    const [state , dispatch]= useReducer(shopReducer, intialState);

    const addToCart = (product)=>{
        
        const updatedProduct = state.products.concat(product);
        calculateTotal(updatedProduct);
        dispatch({
            type: "ADD_TO_CART",
            payload :{
                products : updatedProduct
            }
        })
    };
    const removeFromCart = (product) =>{
    
        const updatedProduct = state.products.filter( p=> p.id !== product.id);
        calculateTotal(updatedProduct);
        dispatch({
            type: "REMOVE_FROM_CART",
            payload:{
                products : updatedProduct,
            }
        })
    }
    const calculateTotal = (products) =>{
        let total = 0;
        products.forEach(pro =>{
            total += pro.price
        })
        dispatch({
            type: "CALCULATE_TOTAL_PRICE",
            payload: total
        
        })
    }

    const values ={
        products : state.products,
        total : state.total,
        addToCart,
        removeFromCart
    }
  return <ShopContext.Provider value={values}>
    {children}
  </ShopContext.Provider>;
}

const useShop =()=>{
    const context = useContext(ShopContext);

    if(context === undefined){
        throw new Error ("must be contex")
    }
    return context
}
export default useShop