import { Alert, Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";

export function MUI() {

    const [showAlert , setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false) , 3000);
    }

    return(
        <Box component="section" sx={{ p: 2, border: '1px solid grey' }}>
            <div>
                <TextField label="Username" variant="outlined" type="text" placeholder="Enter name here.."> </TextField>
            </div>

            <Box sx={{m:2}}>
                <TextField label="Password" variant="standard" type="password" placeholder="Enter password.."> </TextField>
            </Box>

            <div>
                <Button variant = "contained" onClick={ handleClick } className="mx-2" > Login </Button>
                <Button variant = "outlined" color="error" > Cancel </Button>
            </div>

            {
                showAlert && (
                    <Alert severity="success" sx={{mt:2}}> Login successful.. </Alert>
                )
            }
        </Box>
    )
}