import React from 'react';
import '../fonts/fonts.css'
// import {Dimensions} from "react-native-web";
import '../IzBrasserie/css/IzBrasserie.css'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType"
import Information from "../IzBrasserie/Information";
import img_one from "../picture_izBrazzerie/img1.webp";
import heart from '../picture_izBrazzerie/heart.png';
import cart from '../picture_izBrazzerie/cart.png';
import book from '../picture_izBrazzerie/book.png';
import img_one_png from "../picture_izBrazzerie/img1.png";
/*import img_two_slider from "../picture_izBrazzerie/img2.webp";
import img_two_slider_png from "../picture_izBrazzerie/img2.png";
import img_three_slider from "../picture_izBrazzerie/img3.webp";
import img_three_slider_png from "../picture_izBrazzerie/img3.png";
import img_four_slider from "../picture_izBrazzerie/img4.webp";
import img_four_slider_png from "../picture_izBrazzerie/img4.png";*/
import img_on_history from "../picture_izBrazzerie/img2.webp";
import img_on_history_png from "../picture_izBrazzerie/img2.png";
import img_for_legend from "../picture_izBrazzerie/img7.webp"
import img_for_legend_png from "../picture_izBrazzerie/img7.png"
import HistoryAndLegend from "../IzBrasserie/HistoryAndLegend";
import HistoryImg from "../IzBrasserie/HistoryImg";
import DelivaryComponent from "../IzBrasserie/DelivaryComponent";
import neww from "../picture_izBrazzerie/new.jpg";

import pic1 from "../picture_izBrazzerie/В галерею о проекте бразери/min/1.jpg";
import pic2 from "../picture_izBrazzerie/В галерею о проекте бразери/min/2.jpg";
import pic3 from "../picture_izBrazzerie/В галерею о проекте бразери/min/3.jpg";
import pic4 from "../picture_izBrazzerie/В галерею о проекте бразери/min/4.jpg";
import pic5 from "../picture_izBrazzerie/В галерею о проекте бразери/min/5.jpg";
import pic6 from "../picture_izBrazzerie/В галерею о проекте бразери/min/6.jpg";
import pic7 from "../picture_izBrazzerie/В галерею о проекте бразери/min/7.jpg";
import pic8 from "../picture_izBrazzerie/В галерею о проекте бразери/min/8.jpg";
import pic9 from "../picture_izBrazzerie/В галерею о проекте бразери/min/9.jpg";
import pic10 from "../picture_izBrazzerie/В галерею о проекте бразери/min/10.jpg";
import pic11 from "../picture_izBrazzerie/В галерею о проекте бразери/min/11.jpg";
import pic12 from "../picture_izBrazzerie/В галерею о проекте бразери/min/12.jpg";
import pic13 from "../picture_izBrazzerie/В галерею о проекте бразери/min/13.jpg";
import pic14 from "../picture_izBrazzerie/В галерею о проекте бразери/min/14.jpg";
import pic15 from "../picture_izBrazzerie/В галерею о проекте бразери/min/15.jpg";
import pic16 from "../picture_izBrazzerie/В галерею о проекте бразери/min/16.jpg";
import pic17 from "../picture_izBrazzerie/В галерею о проекте бразери/min/17.jpg";
import pic18 from "../picture_izBrazzerie/В галерею о проекте бразери/min/18.jpg";
import pic19 from "../picture_izBrazzerie/В галерею о проекте бразери/min/19.jpg";

// import Slider from "./Slider";
import Footer from "../Footer/Footer"
import LineImg from "../IzBrasserie/LineImg";
const IzBrasserie = () => {

    // const [state, setState] = useState(Dimensions.get('window').width);
    // window.addEventListener('resize', update);
    // function update() {
    //     setState(window.innerWidth);
    // }

    let lines = [
        /*{id: 1, signature: "Здесь будет какой-то текст"},
        {id: 2, signature: "Здесь будет какой-то текст, не длиннее 300 символов"},
        {id: 3, signature: "Здесь будет какой-то текст"},*/
        {id: 1, signature: "13 лет на пути к самыми яркими гастрономическими впечатлениями"}
    ]

    let delivery = [
        /*{id: 1, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block1"},
        {id: 2, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block2"},
        {id: 3, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block3"},*/

        {id: 1, text:"К нам захочется вернуться", style_delivery: "delivery_block1", img: heart, imgPng: heart},
        {id: 2, text:"Вы можете собрать блюда из всех наших проектов в один заказ", style_delivery: "delivery_block2", img: cart, imgPng: cart},
        {id: 3, text:"Мы собрали лучшие блюда для гастрономического наслаждения", style_delivery: "delivery_block3", img: book, imgPng: book}
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
        {id: 12, img: pic12, nmb: 12},
        {id: 13, img: pic13, nmb: 13},
        {id: 14, img: pic14, nmb: 14},
            {id: 15, img: pic15, nmb: 15},
            {id: 16, img: pic16, nmb: 16},
            {id: 17, img: pic17, nmb: 17},
            {id: 18, img: pic18, nmb: 18},
            {id: 19, img: pic19, nmb: 19},
        // {id: 15, img: pic2, nmb: 15},
        // {id: 16, img: pic3, nmb: 1},
    ]

    let historyText = 'Без прикрас, одна из главных точек на гастрономической карте города Владивостока - проект IZ BRASSERIE | ГАСТРОПАБ. С 2008 года наши шеф-повара изобретают для наших любимых гостей, самые смелые и запоминающиеся сочетания европейских и азиатских блюд. Сегодня сложно найти жителей города вкусовые рецепторы которых не насладились блюдами в нашем проекте. Мы собрали фаворитов среди блюд европейской кухни в авторской подаче. Уделив особенное внимание среде, нам удалось воссоздать уголок Европы в самом центре города. Добро пожаловать в  IZ BRASSERIE | ГАСТРОПАБ';
    let atmosphereText = 'Легкая и аутентичная атмосфера, сочные стейки и локальные морепродукты на гриле, итальянская паста и перуанское севиче - прямиком доставят вас в мир высокой кухни. Мы уделяем особенное внимание своим гостям, ведь именно у нас открываются двери к новым гастрономическим впечатлениям и вкусовым открытиям. Внимание персонала, высокая кухня, безупречная подача - наши основы, которые более 14 лет делают нас одними из лучших ресторанов города Владивостока. Авторские коктейли и безупречно подобранная винная карта - гармонично дополнят ваш выбор из основного меню. ';
    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={4} style_element="main_style"/>

            <div className="mainField">

                <PageType title="О ПРОЕКТЕ IZ BRASSERIE"/>

                <Information lines={lines}/>

                <div className="history">
                    <HistoryImg history_or_legend_img={img_on_history} text1="в поисках" text2="вкуса" legend={0}/>

                    <HistoryAndLegend text={historyText}
                                      title={"ИСТОРИЯ"} legend={0}/>
                </div>

                    <LineImg line={pictures}/>


                <div className="delivery">
                    {delivery.map(element => <DelivaryComponent element={element} key={element.id}/>)}
                </div>

                <div className="legend">
                    <HistoryAndLegend text={atmosphereText}
                                      title={"АТМОСФЕРА"} legend={1}/>
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

export default IzBrasserie;
