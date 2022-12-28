import React from 'react';
import {motion} from "framer-motion";
import scooter from '../picture_izBrazzerie/scooter.webp'
import scooterPNG from '../picture_izBrazzerie/scooter.png'
// import heart from '../picture_izBrazzerie/heart.png';
const DelivaryComponent = (props) => {

    const variantImg = {
        visible:{
            opacity: 1,
            y: 0,
        },
        notVisible:{
            opacity: 0,
            y:70,
        }
    }
    const transition_option = (element) => {
        switch (element){
            case 1: return {duration: 1};
            case 2: return  {duration: 1, delay: 0.5};
            case 3: return {duration: 1, delay: 1};
            default: return "error";
        }
    }

    return (
        <motion.div className={props.element.style_delivery} whileInView={'visible'} initial={'notVisible'}
                    viewport={{ once: true, amount: 0.1}} >
            <motion.div className="delivery_elem" variants={variantImg} transition={transition_option(props.element.id)}>
                <picture>
                    <source srcSet={props.element.imgPng} type="image/png"/>
                    <source srcSet={props.element.img} type="image/webp"/>
                    <img className="scooter" alt="scooter_image" src={props.element.imgPng}/>
                </picture>
            <div className="text_delivery">{props.element.text}</div>
            </motion.div>
        </motion.div>
    );
};

export default DelivaryComponent;