import React from 'react';
import Logo from "./Logo";
import MenuElements from "./MenuElements";
import './css/Header.css';
import '../HeaderBlock/css/ElementsMenu.css'
import BasketAndBurger from "./BasketAndBurger";
import store, {persister} from "../Pages/PersistReduxConfiguration";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const Header = ({bold_block, style_element}) => {
    let elements = [
        {id: 1, signature: "О ПРОЕКТЕ", link: "/about"},
        {id: 2, signature: "ЗАКАЗАТЬ ДОСТАВКУ", link: "/menu"},
        {id: 3, signature: "SIBUMI", link: "/sibumi"},
        {id: 4, signature: "IZ BRASSERIE", link: "/iz_brazeri"},
        {id: 5, signature: "КОНДИТОРИЯ", link: "/konditoria"},
        {id: 6, signature: "КОНТАКТЫ", link: '/contacts'}
    ]

    return (
        <div className="headerMenu">
                <Logo/>
                <MenuElements bolder_check = {bold_block} outer_class="menu" style_elements={style_element} inner_class="lineOne" massiv={elements}/>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persister}>
                <BasketAndBurger/>
                </PersistGate>
            </Provider>
        </div>
    );
};

export default Header;
