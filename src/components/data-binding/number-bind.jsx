import { useState } from "react";

export function NumberBind() {
    const [ age , setAge] = useState(24);
    const [price , setPrice] = useState(450000.00);
    const [qty] = useState(4);
    

    return(
        <div>
            <dl>
                <dt> Name </dt>
                <dd>
                    <input type="text" />
                </dd>

                <dt> Age </dt>
                <dd>
                    <input type="number" value={age} />
                </dd>
            </dl>

            <p>
                {price.toLocaleString('en-in')}
               
            </p>
<br />
            <p>
            {parseInt(price)}
            </p>

            <p>
                {
                  (qty === 4) ? (`price = ${price}`) : (`${qty}`)
                }
            </p>
        </div>
    )
}