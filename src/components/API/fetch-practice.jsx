import { useEffect, useState } from "react";

export function fetch_prac(){
    const[product, setProduct] = useState({title:"", price:0, rating:{}, offers:[], image:""});

    function loadProduct(){
        fetch(product.json)
        .then(response => response.json())
        .then(data => {
            setProduct(product)    
        })
    }

    useEffect(()=> {
        loadProduct();
    },[]) 
        
    return(
        <div>

            
        </div>
    )
}