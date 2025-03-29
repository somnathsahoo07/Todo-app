import { useState } from "react";

export function BooleanBind() {
    const [stock , setStock] = useState(true);

    return(
        <div>
            <p>
                {
                    (stock === true) ? "Yes Avl" : "Not Avl" 
                }
            </p>

           
        </div>
    )
}