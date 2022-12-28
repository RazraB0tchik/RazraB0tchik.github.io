import React from 'react';
import '../fonts/fonts.css'
// import {Dimensions} from "react-native-web";
import '../Konditory/css/Konditory.css'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType"
import Information from "../Konditory/Information";
import img_one from "../picture_izBrazzerie/img1.webp";
import heart from '../picture_izBrazzerie/heart.png';
import cart from '../picture_izBrazzerie/cart.png';
import book from '../picture_izBrazzerie/book.png';
/*import img_one_png from "../picture_izBrazzerie/img1.png";
import img_two_slider from "../picture_izBrazzerie/img2.webp";
import img_two_slider_png from "../picture_izBrazzerie/img2.png";
import img_three_slider from "../picture_izBrazzerie/img3.webp";
import img_three_slider_png from "../picture_izBrazzerie/img3.png";
import img_four_slider from "../picture_izBrazzerie/img4.webp";
import img_four_slider_png from "../picture_izBrazzerie/img4.png";*/
import img_on_history from "../picture_izBrazzerie/img2.webp";
import img_on_history_png from "../picture_izBrazzerie/img2.png";
import img_for_legend from "../picture_izBrazzerie/img7.webp"
import img_for_legend_png from "../picture_izBrazzerie/img7.png"
import HistoryAndLegend from "../Konditory/HistoryAndLegend";
import HistoryImg from "../Konditory/HistoryImg";
import DelivaryComponent from "../Konditory/DelivaryComponent";
import neww from "../picture_izBrazzerie/new.jpg";
import newKonditory from "../picture_izBrazzerie/newKonditory.png";

// import pic1 from "../picture_izBrazzerie/temp/Denisbutenko.com-2 (1)_mini.png";
// import pic2 from "../picture_izBrazzerie/temp/Denisbutenko.com-4_mini.png";
// import pic3 from "../picture_izBrazzerie/temp/Denisbutenko.com-5_mini.png";
// import pic4 from "../picture_izBrazzerie/temp/Denisbutenko.com-8 (1)_mini.png";
import pic1 from "../picture_izBrazzerie/temp/Denisbutenko.com-9 (1)_mini.png";
import pic2 from "../picture_izBrazzerie/temp/Denisbutenko.com-12 (1)_mini.png";
import pic3 from "../picture_izBrazzerie/temp/Denisbutenko.com-17 (1)_mini.png";
import pic4 from "../picture_izBrazzerie/temp/Denisbutenko.com-18 (1)_mini.png";
import pic5 from "../picture_izBrazzerie/temp/Denisbutenko.com-28 (1)_mini.png";
import pic6 from "../picture_izBrazzerie/temp/Denisbutenko.com-42 (1)_mini.png";
import pic7 from "../picture_izBrazzerie/temp/Denisbutenko.com-51 (1)_mini.png";
import pic8 from "../picture_izBrazzerie/temp/Denisbutenko.com-55_mini.png";
import pic9 from "../picture_izBrazzerie/temp/Denisbutenko.com-57_mini.png";
import pic10 from "../picture_izBrazzerie/temp/Denisbutenko.com-58_mini.png";
import pic11 from "../picture_izBrazzerie/temp/Denisbutenko.com-70_mini.png";

// import Slider from "./Slider";
import Footer from "../Footer/Footer"
import LineImg from "../Konditory/LineImg";
const Konditory = () => {

    // const [state, setState] = useState(Dimensions.get('window').width);
    // window.addEventListener('resize', update);
    // function update() {
    //     setState(window.innerWidth);
    // }

    let lines = [
        /*{id: 1, signature: "Здесь будет какой-то текст"},
        {id: 2, signature: "Здесь будет какой-то текст, не длиннее 300 символов"},
        {id: 3, signature: "Здесь будет какой-то текст"},*/
        {id: 1, signature: "Утро вашей мечты - в Кондитории"}
    ]

    let delivery = [
        /*{id: 1, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block1"},
        {id: 2, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block2"},
        {id: 3, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block3"},*/

        {id: 1, text:"Вы можете собрать блюда из всех наших проектов в один заказ", style_delivery: "delivery_block1", img: cart, imgPng: cart},
        {id: 2, text:"Завтрак идеального дня - всегда здесь", style_delivery: "delivery_block2", img: heart, imgPng: heart},
        {id: 3, text:"Классическая выпечка и десерты", style_delivery: "delivery_block3", img: book, imgPng: book}
    ]

    let pictures = [
        {id: 1, img: pic1, nmb: 1},
        {id: 2, img: pic2, nmb: 2},
        {id: 3, img: pic3, nmb: 3},
        {id: 4, img: pic4, nmb: 4},
        {id: 5, img: pic5, nmb: 5},
        {id: 6, img: pic6, nmb: 6},
        {id: 7, img: pic7, nmb: 7},
        {id: 8, img: pic8, nmb: 8},
        {id: 9, img: pic9, nmb: 9},
        {id: 10, img: pic10, nmb: 10},
        {id: 11, img: pic11, nmb: 11},
        // {id: 12, img: pic12, nmb: 12},
        // {id: 13, img: pic13, nmb: 13},
        // {id: 14, img: pic14, nmb: 14},
        // {id: 15, img: pic15, nmb: 15},
    ]

    let historyText = 'Многолетняя история любви - КОНДИТОРИЯ. Стремление к совершенству вкуса Уверяем всех любителей изысканных десертов и высококлассной выпечки, вы не пребывали в истинном гастрономическом удовольствии если не пробовали наш фирменный (вставить название). Десертная классика в историческом центре города, знакомая каждому жителю города. Бриоши, нежнейшие круассаны, эклеры, тарталетки, тающий брауни - вас ждет любовь с первого вкуса.';
    let atmosphereText = 'Идеальная кондитерская - существует  находится по адресу: ул. Пограничная 14. Мы без преувеличения гордимся нашим проектом и главным вдохновением все эти годы являетесь - вы. Свежий хрустящий ломтик круассана с ароматным капучино, звучит как начало прекрасного дня. В нашем ассортименте вы встретите все от Павловой до Соленой карамели, заказать десерты можно по ссылке';
    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={5} style_element="main_style"/>

            <div className="mainField">

                <PageType title="О ПРОЕКТЕ КОНДИТОРИЯ"/>

                <Information lines={lines}/>

                <div className="history">
                    <HistoryImg history_or_legend_img={newKonditory} text1="в поисках" text2="вкуса" legend={0}/>

                    <HistoryAndLegend text={historyText}
                                      title={"ИСТОРИЯ"} legend={0}/>
                </div>

                    <LineImg line={pictures}/>


                <div className="delivery">
                    {delivery.map(element => <DelivaryComponent element={element} key={element.id}/>)}
                </div>

                <div className="legend">
                    <HistoryAndLegend text={atmosphereText}
                                      title={"ЛЮБОВЬ"} legend={1}/>
                    <HistoryImg history_or_legend_img={neww} legend={1}/>
                </div>


                {/*<div className="personal">*/}
                {/*    <Slider width_window={state}/>*/}
                {/*</div>*/}

                <div className="footer">
                    <Footer/>
                </div>

            </div>
        </div>
    );
};

export default Konditory;
