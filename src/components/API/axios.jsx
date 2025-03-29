import axios from "axios";
import { useEffect, useState } from "react";

export function AxiosFetch() {
    const [product , setProduct] = useState({title:'' , price:0 , rating:{} , offers:[] , image:'' });

    const [theme] = useState("fw-bold fs-4");

    function LoadProduct() {
        axios.get("product.json")
        .then(res => {
            setProduct(res.data);
        })
    }

    useEffect( () => {
        LoadProduct();
    } , []);

    return(
        <div>
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} />
                </div>

                <div className="col-9">
                    <div>
                        {product.title}
                    </div>

                    <div className="my-2">
                        <span className="badge bg-success text-white"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="text-secondary"> {product.rating.ratings} Ratings & {product.rating.review} Reviews </span>
                    </div>

                    <div className={theme}>
                       &#8377; {product.price.toLocaleString('en-in' , {currency:'INR'})}
                    </div>

                    <div className="my-2">
                        <h5> Avialable Offers </h5>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer => 
                                    <li className="text-success bi bi-tag-fill" key={offer}> <span className="text-secondary" > {offer} </span> </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}