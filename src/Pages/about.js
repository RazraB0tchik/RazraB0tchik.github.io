import React from 'react';
import '../fonts/fonts.css'
// import {Dimensions} from "react-native-web";
import '../About/css/IzBrasserie.css'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType"
import Information from "../About/Information";
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
// import img_on_history from "../picture_izBrazzerie/img2.webp";
// import img_on_history_png from "../picture_izBrazzerie/img2.png";
import img_on_history from "../picture_izBrazzerie/Проект ИЗ БРАЗЕРИ основной замена во втором блоке где стейк.jpg";
import img_on_history_png from "../picture_izBrazzerie/О проекте сибуми фото во 2 блок слева.jpg";
import img_for_legend from "../picture_izBrazzerie/img7.webp"
import img_for_legend_png from "../picture_izBrazzerie/img7.png"
import HistoryAndLegend from "../IzBrasserie/HistoryAndLegend";
import HistoryImg from "../IzBrasserie/HistoryImg";
import DelivaryComponent from "../IzBrasserie/DelivaryComponent";
import neww from "../picture_izBrazzerie/new.jpg";
import pic1 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/1.jpg";
import pic2 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/2.jpg";
import pic3 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/3.jpg";
import pic4 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/4.jpg";
import pic5 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/5.jpg";
import pic6 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/6.jpg";
import pic7 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/7.jpg";
import pic8 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/8.jpg";
import pic9 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/9.jpg";
import pic10 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/10.jpg";
import pic11 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/11.jpg";
import pic12 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/12.jpg";
import pic13 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/13.jpg";
import pic14 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/14.jpg";
import pic15 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/15.jpg";
import pic16 from "../picture_izBrazzerie/В галерею о проекте (основной) бразери/min/16.jpg";
// import pic12 from "../picture_izBrazzerie/mini_twelve.png";
// import pic13 from "../picture_izBrazzerie/mini_thirteen.png";
// import pic14 from "../picture_izBrazzerie/mini_fourteen.png";

// import Slider from "./Slider";
import Footer from "../Footer/Footer"
import LineImg from "../About/LineImg";
const About = () => {

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

        {id: 1, text:"Авторская, европейская и азиатская кухня", style_delivery: "delivery_block1", img: book, imgPng: book},
        {id: 2, text:"Вы можете собрать блюда из всех наших проектов в один заказ", style_delivery: "delivery_block2", img: cart, imgPng: cart},
        {id: 3, text:"13 лет и тысячи любимых гостей со всего мира", style_delivery: "delivery_block3", img: heart, imgPng: heart}
    ]

    let pictures = [
        {id: 1, img: pic1, img_png: pic1},
        {id: 2, img: pic2, img_png: pic2},
        {id: 3, img: pic3, img_png: pic3},
        {id: 4, img: pic4, img_png: pic4},
        {id: 5, img: pic5, img_png: pic5},
        {id: 6, img: pic6, img_png: pic6},
        {id: 7, img: pic7, img_png: pic7},
        {id: 8, img: pic8, img_png: pic8},
        {id: 9, img: pic9, img_png: pic9},
        {id: 10, img: pic10, img_png: pic10},
        {id: 11, img: pic11, img_png: pic11},
        {id: 12, img: pic12, img_png: pic12},
        {id: 13, img: pic13, img_png: pic13},
        {id: 14, img: pic14, img_png: pic14},
        {id: 15, img: pic15, img_png: pic15},
        {id: 16, img: pic16, img_png: pic16},
       // {id: 15, img: img_four_slider, img_png: img_four_slider_png},
    ]

    let historyText = 'Наши проекты - про любовь к нашим гостям, про высокие гастрономические отношения с европейской и азиатской кухней, про Владивосток. В самом сердце города располагаются кондитерская КОНДИТОРИЯ, ресторан японской и паназиатской кухни SIBUMI и одноименный гастропаб IZ BRASSERIE. В каждом из них, своя неповторимая атмосфера созданная лучшими в своем деле шефами, поварами, креативными директорами, амбассадорами и персоналом зала, главной целью которых - являются наши довольные посетители. Вперед к гастрономическим открытиям с IZ BRASSERIE.';
    let atmosphereText = 'Каждое блюдо в наших проектах, имеет свою историю. От традиционных начал, до первой встречи с шефом, подчеркнувшим первозданный вкус и вдохнувшим оригинальную ноту запоминающуюся навсегда. Аромат стейка под авторским соусом, хруст еще горячей выпечки, сбалансированный вкус подобранного вина от сомелье, свежайшие морепродукты из сердца японского моря - вдохновляют нас на поиски новых вкусов. Мы не стоим на месте. Мы путешествуем, экспериментируем, используем локальные и сезонные продукты чтобы удивлять вас снова и снова. Ваши  IZ BRASSERIE';
    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={1} style_element="main_style"/>

            <div className="mainField">

                <PageType title="О ПРОЕКТЕ IZ BRASSERIE GROUP 2009"/>

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
                                      title={"О ВКУСЕ"} legend={1}/>
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

export default About;
