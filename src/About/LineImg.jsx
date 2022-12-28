import React, {useEffect, useState} from 'react';
import Img from "./Img";

const LineImg = ({line}) => {

    const [activeImg, setActiveImg] = useState(false);


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [scroll, setScroll] = useState();

    const [flagScroll, setFlagScroll] = useState(false);


    window.addEventListener('resize', update);
    function update() {
        setWindowWidth(window.innerWidth);
    }
    function displacement() {
        let optimalDist = Math.ceil(windowWidth/355);
        let i = 0;
        if(line.length < optimalDist){
            let concatMas = [];
            let finalMas = [];
            while (concatMas.length < optimalDist){
                line.forEach(elem => {
                    concatMas.push(elem)
                })
            }
            while (i<2){
                finalMas.push(...concatMas);
                i++;
            }
            return finalMas;
            }

        else {
            let finalMas = [];
            while (i<2){
                finalMas.push(...line);
                i++;
            }
            finalMas.length=finalMas.length/2+optimalDist;
            return finalMas;
        }

    }

    // document.getElementsByClassName('block_with_pictures')[0].scrollWidth = windowWidth;


    // function mouseDown(e){
    //     console.log('asdsad');
    //     // setScroll(document.getElementsByClassName("block_with_pictures")[0]);
    //     let position = e.clientX;
    //     setStartPos(position);
    //     console.log(startPos + ' start');
    //     // console.log(e.clientX);
    //     // document.getElementsByClassName("block_with_pictures")[0];
    // }

    // function mouseUp(e){
    //     // setScroll(document.getElementsByClassName("block_with_pictures")[0]);
    //     console.log("pointer up")
    //     // console.log(e.clientX);
    //     let position = e.clientX;
    //     setPath(position - startPos)
    //     console.log(startPos + ' start');
    //     // document.getElementsByClassName("block_with_pictures")[0];
    // }


    function updateScroll(){
        console.log('down')
        // setFlagScroll(true);
        // setScroll(document.getElementsByClassName("pool_with_img")[0].scrollLeft);
        // console.log(scroll + ' scroll');
        // setFlagScroll(false);
    }

    // useEffect(()=>{
    //     // document.getElementsByClassName("block_with_pictures")[0].addEventListener("scroll", updateScroll);
    //     document.getElementsByClassName("block_with_pictures")[0].addEventListener("click", updateScroll);
    // })

    return (
        <div className={activeImg && (window.innerWidth>800) ? "block_with_pictures_not_active" : "block_with_pictures"}>
        <div className="pool_with_img">
            {line.map(photo => <Img active = {activeImg} setActive = {setActiveImg} photo={photo} key={photo.id} position = {scroll} flagScroll = {flagScroll}/>)}
        </div>
        </div>
    );
};

export default LineImg;
