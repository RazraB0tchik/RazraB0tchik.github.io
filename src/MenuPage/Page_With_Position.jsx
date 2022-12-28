import React, {useState} from 'react';
import CardElement from "./CardMenu"
import  store, {persister} from "../Pages/PersistReduxConfiguration";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
const PageWithPosition = ({variant_menu, page}) => {
    console.log(variant_menu + " asd");

    variant_menu.forEach(elem=>{
        console.log(elem.id+ elem.text_elem + " elemPagepoll");
    })
    return (
        <div className="page_with_positionElem">
            {variant_menu.map(element=>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persister}>
                    <CardElement element={element} key={element.id} page={page}/>
                    </PersistGate>
                </Provider>)}
        </div>
    );
};

export default PageWithPosition;
