import { useEffect, useState } from "react";

export function xml_ex(){

    const[product, setProduct] = useState({title:"", price:0, rating:{}, offers:[] });

    function loadProduct(){

        var http= new XMLHttpRequest();

        http.open("get", "product.json", true);
        http.send();
        http.onreadystatechange = function(){

            if(http.readyState===4){
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(()=>{

        loadProduct();
    },[])

    return(
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%"/>
                </div>

            </div>

        </div>
    )
}