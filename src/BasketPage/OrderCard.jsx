import React from 'react';
import close_picture from "../HeaderBlock/pictures_footer/в корзине (1).webp"
import close_picture_png from "../HeaderBlock/pictures_footer/в корзине (1).png"
import Button from "./Button";
import {motion} from "framer-motion";
import img1 from "../picture_izBrazzerie/img1.webp";
import img1_png from "../picture_izBrazzerie/img1.png";
import store, {persister} from "../Pages/PersistReduxConfiguration";
import {Provider, useDispatch} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {delOrderPosition, uppCount} from "../Pages/ReducerRedux";

const OrderCard = (props) => {

    // const deleteElements = (element) => {
    //     setElements(element.filter(p => p !== element));
    // };
    const dispatch = useDispatch()

    console.log(props.order.id);
    function checkOnLastElement(){
        return props.order.id === props.masline;
    }
    return (
        <div className= "order_card">
            <div className="fake_element"/>
            <div className="order_inside_block">
                <div className={checkOnLastElement() ? "order_card_last" :"main_order_block"}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <div className="order_photo">
                <img className="order_picture_inside_block" src={props.order.img} alt="photo order"/>

                {/*<picture>*/}
                {/*    <source srcSet={props.order.img} type="image/webp"/>*/}
                {/*    <source srcSet={props.order.img_png} type="image/png"/>*/}
                {/*    <img className="order_picture_inside_block" src={props.order.img} alt="photo order"/>*/}
                {/*</picture>*/}

            </div>
            <div className="title_order">
            <div className = "title_element_order">Название</div>
            <div className="text_order">
                <div className="text_position_order">{props.order.name}</div>
            </div>
            </div>
            <div className="button">
                <div className = "title_element_order_count">Кол-во</div>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persister}>
                      <Button id={props.order.id} count={props.order.count} type={props.type}/>
                    </PersistGate>
                </Provider>
                {/*<ButtonCount type={"basket"} count={props.order.count} id={props.order.id}/>*/}
            </div>

            <div className="title_order_MobileVersion">
                <h3 className="text_order">{props.order.name}</h3>
                {/*<div className="buttonMobile"><Button props={props}/></div>*/}
            </div>

            <div className="prise">
                <div className = "title_element_order_prise">Цена</div>
                 <h3 className="title_prise">{props.order.summa} Р</h3>
            </div>

            <div className={props.type === "finishWindow" ? "close" : "delete"}>
                <motion.div className="block_for_close_button_order" whileHover={{opacity: 0.5}} transition={{duration: 0.3}}>

                    <picture>
                        <img onClick={()=>dispatch(delOrderPosition({id: props.order.id}))} className="close_picture_order" src={close_picture} alt="close_img"/>
                    </picture>

                </motion.div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
