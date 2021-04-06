import '../../App.css';
import "./ShopWithGoods.css"
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {NavLink} from "react-router-dom";

export function ShopWithGoods(props) {

    return (
        <div className={"blocknameOfGoods"}>
            <AppBar position="fixed">
                <Toolbar className={"menu"}>
                    <Button color="inherit">
                        <NavLink to={"/"}>
                            Go Back To Main Menu
                        </NavLink>
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={"nameOfShop"}>
                {props.data.map((shop) => {
                    return <Paper style={{padding: '10px', margin:'10px'}}>
                        <span>{shop}</span>
                    </Paper>
                })}
            </div>
        </div>

    )

}

