import React from 'react';
import BlockWithText from "./BlockWithText";
import img_scooter_one from "../picture_izBrazzerie/scooter.webp";
import img_scooter_one_png from "../picture_izBrazzerie/scooter.png";
import img_scooter_two from "../picture_izBrazzerie/scooter.webp";
import img_scooter_two_png from "../picture_izBrazzerie/scooter.png";
import img_scooter_three from "../picture_izBrazzerie/scooter.webp";
import img_scooter_three_png from "../picture_izBrazzerie/scooter.png";
import img_scooter_four from "../picture_izBrazzerie/scooter.webp";
import img_scooter_four_png from "../picture_izBrazzerie/scooter.png";

const ArrayOfBlocks = () => {
    let blocks = [
        {id:1, img: img_scooter_one, img_png: img_scooter_one_png, title: "ОПЛАТА ЗАКАЗА", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut."},
        {id:2, img: img_scooter_two, img_png: img_scooter_two_png, title: "ОПЛАТА ЗАКАЗА", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut."},
        {id:3, img: img_scooter_three, img_png: img_scooter_three_png, title: "ОПЛАТА ЗАКАЗА", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut."},
        {id:4, img: img_scooter_four, img_png: img_scooter_four_png, title: "ОПЛАТА ЗАКАЗА", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut."}
    ]

    return (
        <div className="array_on_blocks">
            {blocks.map(block => <BlockWithText block={block} key={block.id}/>)}
        </div>
    );
};

export default ArrayOfBlocks;