import React from 'react';
import {motion} from "framer-motion";

const ImgOnAllWindow = ({active, setActive, img, img_png, activePool}) => {

    const variantImg = {
        visible:{
            opacity: 1,
            y: 0,
        },
        notVisible:{
            opacity: 0,
            y:1000,
        }
    }

    const setParamsImg = () => {
        setActive(!active);
        activePool(false);
        document.body.style.overflow="visible";
    }

    return (
        <motion.div className= {(active && (window.innerWidth>800)) ? "windowAll active" : "windowAll"} onClick={setParamsImg}>
            <motion.div className="windowImg" variants={variantImg} animate={active ? "visible" : "notVisible"} transition={{duration: 0.9}}>
                <picture>
                    <source srcSet={img} type="image/webp"/>
                    <source srcSet={img_png} type="image/png"/>
                    <img className="pictureOnWindow"  src={img} alt="big_picture"/>
                </picture>
            </motion.div>
        </motion.div>
    );
};

export default ImgOnAllWindow;