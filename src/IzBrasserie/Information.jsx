import React from 'react';
import LineBackText from "./LineBackText";
import img_logotype from '../HeaderBlock/pictures_footer/Бразери белый.png'
import {motion} from 'framer-motion'
import video1 from "../videos/video1.mp4"
import video2 from "../videos/video2.webm"
import newVideo from "../videos/видео_бразери.mp4"
const Information = ({lines}) => {

    const variantTitle = {
        visible:{
            y: 0,
            opacity: 1,
        },
        notVisible:{
            y: 150,
            opacity: 0,
        }
    }


    return (
        <div className="background_and_texts">

            {/*Серая картинка с текстом*/}
            <div className="splash_screen">
                {/*<img className="background_img" src={mysrc} alt="pizza"/>*/}
                <video className="video_info" autoPlay loop muted>
                    {/*<source className="video_webm" src={video2} type="video/webm"/>
                    <source className="video_mp4" src={video1} type="video/mp4"/>*/}
                    <source className='video_mp4' src={newVideo} type='video/mp4'/>
                </video>
                </div>

            <motion.div className="text_on_img" whileInView={'visible'} initial={'notVisible'}
                        viewport={{ once: true, amount: 0.1}}>
                <div className="img_on_background"><motion.div variants={variantTitle} transition={{duration: 1}}><img className="title_picture" src={img_logotype} alt="logotype company"/></motion.div></div>

                <motion.div className="all_lines" variants={variantTitle} transition={{duration: 1, delay: 0.5}}>
                    {lines.map(line => <LineBackText line={line} key={line.id}/>)}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Information;