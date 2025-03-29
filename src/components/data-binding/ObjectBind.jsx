import { useState } from "react";

export function ObjectBind() {
    const [product ,  setProduct] = useState({id:1 , name:'TV' , price:43999 , stock:true});

    const [employee , setEmployee] = useState([{id:1 , name:'Andu' , desig:'Web Dev'} , {id:2 , name : 'pandu' , desig : 'DevOps'} , {id:3 , name : 'Gandu' ,  desig : 'Java Dev'}]);


    return(
        <div>
            <h2> Binding Object </h2>
            <p>
                {product.name}
            </p>

            <div>
                {
                    Object.keys(product).map(products => 
                        <li key={products} style={{listStyle:"none"}}> {` ${products} :  ${product[products]}`} </li>
                    )
                }
            </div>

            <br />

            <div>
                <h2> Binding Array of Objects </h2>
                <br />
                <h3> Employee Details </h3>
                <p>
                    {
                       employee.map(emp => 
                        <li key={emp} style={{listStyle:"none"}}>
                            {emp.id} &nbsp; 
                            {emp.name} &nbsp; 
                            {emp.desig}
                        </li>
                       )
                    }
                </p>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                      <th> Id </th>
                      <th> Name </th>
                      <th> Designation </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employee.map(emp => <tr key={emp}>
                            <td> {emp.id} </td>
                            <td> {emp.name} </td>
                            <td> {emp.desig} </td>
                        </tr>)
                    }
                </tbody>

                
            </table>
        </div>
    )
}