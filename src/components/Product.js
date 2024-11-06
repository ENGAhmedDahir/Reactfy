import { useEffect, useState } from "react";
import useShop from "../ShopContext"

const Product =({product})=>{
    const [isInCart , setInCart]= useState(false);
    
        
        const { addToCart , removeFromCart , products} = useShop();
        useEffect(()=>{
           const isInCart = products.filter(pro => pro.id === product.id)
          if(isInCart.length>0){
            setInCart(true)
          }else{
            setInCart(false)
          }
        } , [products])
   
    const handleAddToCart = () =>{
        if(isInCart){
            removeFromCart(product)
        }else{
        addToCart(product);
        }
    
    }

    return (
        <div className="card"
        style={{
            minHeight : "100%",
            width : "100%",
            background : `linear-gradient( rgba(0,0,0,0.1) , rgba(0,0,0,0.1)),
            url(${product.urlImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize : "cover"
        }}
        >
            
            <div className="info">
                <span >{product.name}</span>
                <span >{product.price}</span>

            </div>
            <button className={ `btn ${isInCart ? "btn-secondary" : "btn-primary"
            }`} onClick={handleAddToCart}>
              {isInCart ? "-" : "+"}
                </button>
        </div>
    )
}

export default Product