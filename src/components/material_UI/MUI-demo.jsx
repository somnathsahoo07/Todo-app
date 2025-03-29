import { TextField } from "@mui/material";
import { useState } from "react";


export function MUIDemo(){
    const[username, setUsername]= useState('');

    function handleNameChange(e){
        setUsername(e.target.value);
    }

    function handleLoginClick(){
        console.log(username);
    }

    return(

        <div className="container-fluid">
            <h2>Bootstrap Design</h2>
            <div className="w-25">
                <label className="form-label">UserName</label>
                <div>
                    <input type="text" placeholder="Your Name" className="form-control"/>
                </div>
                <button className="btn btn-danger w-100 mt-3">LOGIN</button>
            </div>
            <br/><br/>
            <h2>MUI Design</h2>
            <div className="w-25">
                <div>
                    <TextField onChange={handleNameChange} type="text" label="User Name" className="w-100" variant="standard" placeholder="Enter Your Name"></TextField>
                
                </div>
                <div>
                    <TextField type="password" label="Password" className="w-100" variant="standard" placeholder="Your Password"></TextField>
                </div>
                <div>
                    <button onClick={handleLoginClick} variant="contained" color="error" className="w-100">Login</button>
                </div>
            </div>
        </div>
    )
}