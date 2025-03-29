import { useEffect, useState } from "react"

export function Login() {
   const [name , setName] = useState('Som');

   useEffect( () => {
    setName('Chodi')
   },[])

    return(
        <div>
            <dl>
                <dt> User Name </dt>
                <dd>
                    <input type="text" />
                </dd>

                <dt> Password </dt>
                <dd>
                    <input type="password" />
                </dd>
            </dl>

            <button type="btn btn-primary"> Login </button>

            <p> {name} </p>
        </div>
    )
}