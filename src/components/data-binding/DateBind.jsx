import moment from "moment";
import { useState } from "react";

export function DateBind() {
    const [mfd , setMfd] = useState(Date());

    return(
        <div>
            <p>
                {
                    moment(mfd).format('MMMM Do YYYY')
                }
            </p>
        </div>
    )
}