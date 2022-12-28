import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import store, {persister} from "./PersistReduxConfiguration";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";


import ServicePage from './ServicePage'
import Iz_brasserie from "./Iz_brasserie";
import Main from "./MainPage"
import Contact from "./СontactsPage"
import Menu from "./MenuPage"
import Basket from "./BasketPage"
import Error from "./ErrorePage"
import Loading from "./Loading"
import Sibumi from "./sibumi"
import Konditory from "./konditory"
import About from "./about"
import ResultPage from "./ResultPage"

const RouterComponent = () => {
    return (
    <Router>
            <Routes>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Route path="/iz_brazeri" element={<Iz_brasserie/>} />,
                <Route path="/service" element={<ServicePage/>} />
                <Route path="/" element={<Main/>} />
                <Route path="/contacts" element={<Contact/>} />
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/basket" element={<Provider store={store}><PersistGate loading={null} persistor={persister}><Basket/></PersistGate></Provider>}/>
                <Route path="*" element={<Error/>}/>
								<Route path="/order/:id"  element={<ResultPage/>}/>
                <Route path="/load" element={<Loading/>}/>
                <Route path="/sibumi" element={<Sibumi/>}/>
                <Route path="/konditoria" element={<Konditory/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
    </Router>
    );
};

export default RouterComponent;
