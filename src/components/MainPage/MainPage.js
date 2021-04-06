/*import '../../App.css';*/
import "./MainPage.css"
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";


export function MainPage(props) {

    return (
        <div  className={"mainPage"} >
            <div>
                <AppBar position="static">
                    <Toolbar className={"menu"} >
                        <Button color="inherit">
                            <NavLink to={"/ProductName"}>
                                Product Name
                            </NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to={"/ShopWithGoods"}>
                                Goods in stock
                            </NavLink>
                        </Button>
                        <Button color="inherit">
                            <NavLink to={"/ShopWithMaxBalance"}>
                                Shop with maximum balance
                            </NavLink>
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>
        </div>

    )

}

