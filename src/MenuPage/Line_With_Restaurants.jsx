import React, {useState} from 'react';
import ElementLinkList from "./Element_LinkList";
import {motion} from "framer-motion";
const LineWithResotans = ({page_type, list, setClickOne, setClickThree, setClickTwo}) => {

    const [clickBlockTwo, setClickBlockTwo] = useState(false);

    const [clickBlockThree, setClickBlockThree] = useState(false);

    const [clickBlockOne, setClickBlockOne] = useState(true);

    if (page_type === "menu") {


        function changePosition(nameElement) {
            switch (nameElement) {
                case "block_logo_one":
                    if (clickBlockOne === false) {
                        setClickBlockOne(!clickBlockOne)
                        setClickBlockTwo(false)
                        setClickBlockThree(false)
                        setClickTwo(false)
                        setClickOne(!clickBlockOne)
                        setClickThree(false)
                    }
                    break;
                case "block_logo_two": {
                    if (clickBlockTwo === false) {
                        setClickBlockTwo(!clickBlockTwo)
                        setClickBlockOne(false)
                        setClickBlockThree(false)
                        setClickTwo(!clickBlockTwo)
                        setClickOne(false)
                        setClickThree(false)
                    }
                    break;
                }
                case "block_logo_three": {
                    if (clickBlockThree === false) {
                        setClickBlockThree(!clickBlockThree)
                        setClickBlockTwo(false)
                        setClickBlockOne(false)
                        setClickTwo(false)
                        setClickOne(false)
                        setClickThree(!clickBlockThree)

                    }
                    break;
                }
            }
        }

        const scheckLogo = (elem) => {
            switch (elem) {
                case "block_logo_one":
                    return clickBlockOne;
                case "block_logo_two":
                    return clickBlockTwo;
                case "block_logo_three":
                    return clickBlockThree

            }
        }


        return (
            <div className="links_restaurant_cards">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <motion.div className="inside_link_pool_restaurants" animate={{y: 0, opacity: 1}} initial={{y: 100, opacity: 0}}
                            transition={{duration: 1, delay: 0.3}}>
                    {list.map(element_link =>  <motion.div className={element_link.class_name} onClick={() => changePosition(element_link.class_name)}>
                        <img src={scheckLogo(element_link.class_name) ? element_link.imageTwo : element_link.imageOne}
                             alt="logotype" className="logotype_in_block"/></motion.div>)}
                </motion.div>

            </div>
        );
    }
};

export default LineWithResotans;
