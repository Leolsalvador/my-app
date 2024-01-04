import React from "react";
import { useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { paperStyle } from "../utils/utils";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import wallpaper from "../images/wallpaper.jpg"


export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    console.log(email);
    console.log(password);

    return (
        <React.Fragment>
            <Box sx={{backgroundColor: "#3D1E1E"}}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        <Grid item xs={3}>
                            <Grid container justifyContent="center">
                                <Typography 
                                    variant="h4"
                                    gutterBottom
                                    sx={{color: "#ffff", fontSize: "64px"}}>
                                    Car.AI
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Typography 
                                    variant="h6"
                                    gutterBottom
                                    sx={{color: "#DA761E", fontSize: "32px"}}>
                                    Login
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                <TextField
                                    id="outlined-basic"
                                    type="email"
                                    variant="outlined"
                                    sx={{width: "302px", height: "44px", borderRadius: "8px", backgroundColor: "#363636"}}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>
                            <Grid container justifyContent="center" marginTop={2}>
                                <Typography 
                                    variant="h6"
                                    gutterBottom
                                    sx={{color: "#DA761E", fontSize: "32px"}}>
                                    Senha
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center">
                                <TextField
                                    id="outlined-basic"
                                    type="password"
                                    variant="outlined"
                                    sx={{width: "302px", height: "44px", borderRadius: "8px", backgroundColor: "#363636"}}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid container justifyContent="center" marginTop={3}>
                                <Button
                                    variant="contained"
                                    sx={{width: "133px",
                                        height: "39px",
                                        borderRadius: "8px",
                                        backgroundColor: "#DA761E",
                                        marginRight: "33px"}}
                                    onClick={() => navigate("/home")}
                                >
                                    Login
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{width: "133px", height: "39px", borderRadius: "8px", backgroundColor: "#DA761E"}}
                                    onClick={() => navigate("/register")}
                                >
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={9}>
                            <Grid container justifyContent="center">
                                <img src={wallpaper} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
}