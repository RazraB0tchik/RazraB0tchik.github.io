import React, {useEffect, useState} from 'react';
import {motion} from "framer-motion";
import arrow from '../picture_izBrazzerie/arrow_allWindow.svg'

const ImgOnAllWindow = ({active, setActive, activePool, startImg, clickL, clickR}) => {

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


    // const [img, setImg] = useState(startImg);

    // function findElement(id){
    //     mas.forEach(element => {
    //         console.log(element)
    //         if(element.id === id){
    //             setImg(element.img)
    //         }
    //     })
    // }

    // const clickL = () => {
    //     setPictureId(pictureId-1);
    //     console.log(pictureId + 'update');
    // }

    // useEffect(() => {
    //     console.log(pictureId+ " picture")
    //    if(flag === true){
    //        mas.forEach(elem => {
    //            if(elem.id === pictureId){
    //                setImg(elem.img);
    //            }
    //        })
    //    }
    //
    // }, [flag])


    // useEffect(()=>{
    //     if(leftFlag === true) {
    //         setPictureId(pictureId - 1);
    //         console.log(pictureId + 'newEff');
    //         setLeftFlag(!leftFlag);
    //     }
    // }, [leftFlag])



    // const [imgId, setImgId] = useState(startImgId);
    // function showElem() {
    //     if(flag===true){
    //
    //     }
    // }

    // const [flag, setFlag] = useState(false);


    // const [pictureAllWindow, setPictureAllWindow] = useState(5);

    // const [actualImg, setActualImg] = useState();

    const setParamsImg = () =>
    {
        setActive(!active);
        activePool(false);
        document.body.style.overflow="visible";
    }

    // const clickRight = () => {
    //     if(flag === false) {
    //         setPictureAllWindow(pictureAllWindow+3);
    //         setActualImg(masPicture[pictureAllWindow].img);
    //         setFlag(true)
    //     }
    //     else {
    //         if (pictureAllWindow < masPicture.length) {
    //             console.log(pictureAllWindow)
    //             setPictureAllWindow(pictureAllWindow + 1);
    //             setActualImg(masPicture[pictureAllWindow].img);
    //         }
    //     }
    // }
    //
    // function clickLeft() {
    //     if(flag === false) {
    //         console.log(pictureAllWindow + ' left');
    //         console.log(pictureAllWindow + ' new');
    //         setPictureAllWindow(pictureAllWindow-1);
    //         setActualImg(masPicture[pictureAllWindow].img);
    //         setFlag(true)
    //     }
    //     else {
    //         console.log(pictureAllWindow + ' left')
    //         if (pictureAllWindow >= 1) {
    //             setPictureAllWindow(pictureAllWindow - 1);
    //             setActualImg(masPicture[pictureAllWindow].img);
    //         }
    //         if (pictureAllWindow === 1){
    //             setPictureAllWindow(pictureAllWindow);
    //             setActualImg(masPicture[pictureAllWindow].img);
    //         }
    //         }
    //     }
    // }

    return (
        <motion.div className= {(active && (window.innerWidth>800)) ? "windowAll active" : "windowAll"} >

            {/*<motion.div variants={variantImg} animate={active ? "visible" : "notVisible"} transition={{duration: 0.9}} className={(active && (window.innerWidth>800)) ? "leftButtonAboutPage" : "leftButtonAboutPage_none"} onClick={clickLeft}/>*/}

            <motion.div className="leftButtonAboutPage" onClick={()=>clickL()} variants={variantImg} animate={active ? "visible" : "notVisible"} transition={{duration: 0.9}}>
                <img src={arrow} className='arrow_allWindow_left'/>
            </motion.div>

            <motion.div className="windowImg" variants={variantImg} animate={active ? "visible" : "notVisible"} transition={{duration: 0.9}}>
                <picture>
                    {/*<source srcSet={img} type="image/webp"/>*/}
                    {/*<source srcSet={img_png} type="image/png"/>*/}
                    <img className="pictureOnWindow" src={startImg} alt="big_picture"/>
                </picture>
            </motion.div>

            <motion.div className="rightButton" onClick={()=>clickR()} variants={variantImg} animate={active ? "visible" : "notVisible"} transition={{duration: 0.9}}>
                <img src={arrow} className='arrow_allWindow_right'/>
            </motion.div>

            <div className='back_elem_close' onClick={setParamsImg}>

            </div>
        </motion.div>
    );
};

export default ImgOnAllWindow;

