import './App.css';
import {ProductName} from "./components/ProductName/ProductName";
import React from "react";
import {ShopWithMaxBalance} from "./components/ShopWithMaxBalance/ShopWithMaxBalance";
import {Redirect, Route, Switch} from 'react-router-dom'
import {ShopWithGoods} from "./components/ShopsWithGoods/ShopsWithGoods";
import {MainPage} from "./components/MainPage/MainPage";

export let data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
        }
    },
    "stock": {
        "stocks": {
            "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    },
    getValue: () => {
        return data.displayedName.displayedName.value
    },
    getShopWithGood: () => {
        let array = data.stock.stocks[34]
        let stocksNotAmpty = [];
        for (let a in array) {
            if (array[a] > 0) {
                stocksNotAmpty.push(a)
            }
        }
        return stocksNotAmpty
    },
    getShopWithMaxGoods: () => {
        let array = data.stock.stocks[34]
        let newArray = [];
        for (let a in array) {
            newArray.push(array[a])
        }
        let newArrayNumbers = newArray.map(Number)
        let MaxNumber = Math.max.apply(null, newArrayNumbers)
        let nameShop;
        for (let a in array) {
            if (array[a] == MaxNumber) {
                nameShop = a;
            }
        }
        let shopAndStock = [nameShop, MaxNumber]
        return shopAndStock
    }
}

function App() {


    return (
        <div>
            {
                <Switch>
                    <Route exact path={"/"} render={() => <MainPage/>}/>
                    <Route path={"/ShopWithGoods"} render={() => <ShopWithGoods data={data.getShopWithGood()}/>}/>
                    <Route path={"/ProductName"} render={() => <ProductName value={data.getValue()}/>}/>
                    <Route path={"/ShopWithMaxBalance"} render={() => <ShopWithMaxBalance
                        quantity={data.getShopWithMaxGoods()[1]}
                        nameOfShop={data.getShopWithMaxGoods()[0]}/>}/>
                    <Route path={'/404'} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
                    <Redirect path={'*'} to={"404"}/>
                </Switch>}

        </div>

    )

}

export default App;
