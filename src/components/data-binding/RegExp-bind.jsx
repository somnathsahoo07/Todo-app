import { useState } from "react";

export function RegExpBind() {
    const [mob , setMob] = useState(prompt("Enter Mobile number : "));

    return(
        <div>
            {
                mob.match(/\+91\d{10}/) ? "verified" : "Not Valid"
            }
        </div>
    )
}