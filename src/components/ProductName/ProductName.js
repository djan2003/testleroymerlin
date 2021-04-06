import '../../App.css';
import "./productName.css"
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {NavLink} from "react-router-dom";

export function ProductName(props) {

    return (
        <div className={"blocknameOfGoods"} >
            <AppBar position="fixed">
                <Toolbar className={"menu"}>
                    <Button color="inherit">
                        <NavLink to={"/"}>
                            Go Back To Main Menu
                        </NavLink>

                    </Button>
                </Toolbar>
            </AppBar>
            <div className={"nameOfGoods"}  >
                <Grid container spacing={3}>
                    <Grid>
                        <Paper style={{padding: '10px'}}>
                            <p>{props.value}</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>

    )

}

