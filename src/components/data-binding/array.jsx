import { useState } from "react";

export function ArrayBind() {
    const [cities , setCities] = useState(['BBSR','Hyd','Del']);

    return(
        <div>
            <dl>
                <dt> Cities </dt>
                <dd>
                    <select>
                        {
                            cities.map(city => 
                                <option key={city}> {city} </option>                               
                            )
                        }
                    </select>
                </dd>
            </dl>
        </div>
    )
}