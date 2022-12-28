import React from 'react';
import {createRoot} from 'react-dom/client';
import Iz_brasserie from "./Pages/Iz_brasserie";
import ServicePage from "./Pages/ServicePage";
import ContactsPage from "./Pages/СontactsPage";
import BasketPage from "./Pages/BasketPage"
import MainPage from "./Pages/MainPage";
import RouterComponent from "./Pages/RouterComponent";
import MenuPage from "./Pages/MenuPage"

const rootElem = document.getElementById('root');
const root = createRoot(rootElem);
root.render(
    <RouterComponent/>
);
