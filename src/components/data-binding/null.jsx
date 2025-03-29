import { useState } from "react";

export function NullBind() {
    const [price] = useState(prompt("Enter price : "));

    return(
        <div>
            {
                (price === null) ? "Not defined" : (`${price}`)
            }
        </div>
    )
}