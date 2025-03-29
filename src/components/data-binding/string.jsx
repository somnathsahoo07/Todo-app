import { useState } from "react";

export function StringBind() {
    const [str] = useState("text-success border border-1 border-dark");

    return(
        <div className={`w-50 text-center my-3 ${str}`}>
           <h2> React </h2>
        </div>
    )
}