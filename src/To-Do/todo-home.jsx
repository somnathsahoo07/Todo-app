import { Hidden } from "@mui/material";
import { Link } from "react-router-dom";

export function ToDoHome(){

    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:'950px'}}>
            <div style={{width:'500px'}} className="d-flex">
            <Link to='/register' className="btn btn-dark w-50"> Register </Link>
            <Link to='/login' className="btn btn-warning w-50 mx-2">Login</Link>
            </div>
        </div>
    )
}