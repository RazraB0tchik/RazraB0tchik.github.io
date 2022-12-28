import React from 'react';
import {motion} from 'framer-motion'
const ElementMenu = (props) => {
    return (
        <div>
            <motion.a whileHover={{color: "rgb(206, 189, 160)"}} transition={{duration: 0.5}} href={props.elementMenu.link} className={props.style}>{props.elementMenu.signature}</motion.a>
        </div>
    );
};

export default ElementMenu;