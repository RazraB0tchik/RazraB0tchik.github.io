import React from 'react';
import '../fonts/fonts.css'
// import {Dimensions} from "react-native-web";
import '../Sibumi/css/Sibumi.css'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType"
import Information from "../Sibumi/Information";
import img_one from "../picture_izBrazzerie/img1.webp";
import img_one_png from "../picture_izBrazzerie/img1.png";
// import img_two_slider from "../picture_izBrazzerie/img2.webp";
// import img_two_slider_png from "../picture_izBrazzerie/img2.png";
// import img_three_slider from "../picture_izBrazzerie/img3.webp";
// import img_three_slider_png from "../picture_izBrazzerie/img3.png";
// import img_four_slider from "../picture_izBrazzerie/img4.webp";
// import img_four_slider_png from "../picture_izBrazzerie/img4.png";
import pic1 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/1.jpg";
import pic2 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/2.jpg";
import pic3 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/3.jpg";
import pic4 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/4.jpg";
import pic5 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/5.jpg";
import pic6 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/6.jpg";
import pic7 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/7.jpg";
import pic8 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/8.jpg";
import pic9 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/9.jpg";
import pic10 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/10.jpg";
import pic11 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/11.jpg";
import pic12 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/12.jpg";
import pic13 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/13.jpg";
import pic14 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/14.jpg";
import pic15 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/15.jpg";
import pic16 from "../picture_izBrazzerie/В галерею о проекте сибуми/min/16.jpg";
import location from '../picture_izBrazzerie/location.png';
import cart from '../picture_izBrazzerie/cart.png';
import book from '../picture_izBrazzerie/book.png';
//import img_on_history from "../picture_izBrazzerie/img2.webp";
//import img_on_history_png from "../picture_izBrazzerie/img2.png";
// import rolls from "../picture_izBrazzerie/rolls.jpg";
import rolls from "../picture_izBrazzerie/О проекте сибуми фото во 2 блок слева.jpg";
import neww from "../picture_izBrazzerie/new.jpg";
import img_for_legend from "../picture_izBrazzerie/img7.webp"
import img_for_legend_png from "../picture_izBrazzerie/img7.png"
import HistoryAndLegend from "../Sibumi/HistoryAndLegend";
import HistoryImg from "../Sibumi/HistoryImg";
import DelivaryComponent from "../Sibumi/DelivaryComponent";
// import Slider from "./Slider";
import Footer from "../Footer/Footer"
import LineImg from "../Sibumi/LineImg";
const Sibumi = () => {

    // const [state, setState] = useState(Dimensions.get('window').width);
    // window.addEventListener('resize', update);
    // function update() {
    //     setState(window.innerWidth);
    // }

    let lines = [
        /*{id: 1, signature: "Здесь будет какой-то текст"},
        {id: 2, signature: "Здесь будет какой-то текст, не длиннее 300 символов"},
        {id: 3, signature: "Здесь будет какой-то текст"},*/
        {id: 1, signature: "Дверь в Азию в самом центре нашего города"}
    ]

    let delivery = [
        /*{id: 1, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block1"},
        {id: 2, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block2"},
        {id: 3, text:"Здесь говорится, как ресторан быстро делает доставку, надеюсь это действительно быстро. надеюсь это действительно быстро.", style_delivery: "delivery_block3"},*/

        {id: 1, text:"Уголок Японии в самом центре Владивостока", style_delivery: "delivery_block1", img: location, imgPng: location},
        {id: 2, text:"Оригинальный вкус в авторской подаче", style_delivery: "delivery_block2", img: book, imgPng: book},
        {id: 3, text:"Вы можете собрать блюда из всех наших проектов в один заказ", style_delivery: "delivery_block3", img: cart, imgPng: cart}
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
        // {id: 13, img: img_two_slider, img_png: img_two_slider_png},
        // {id: 14, img: img_three_slider, img_png: img_three_slider_png},
        // {id: 15, img: img_four_slider, img_png: img_four_slider_png},
        // {id: 16, img: img_two_slider, img_png: img_two_slider_png},
        // {id: 17, img: img_three_slider, img_png: img_three_slider_png},
        // {id: 18, img: img_four_slider, img_png: img_four_slider_png},
        // {id: 19, img: img_one, img_png: img_one_png},
        // {id: 20, img: img_two_slider, img_png: img_two_slider_png},
        // {id: 21, img: img_three_slider, img_png: img_three_slider_png},
        // {id: 22, img: img_four_slider, img_png: img_four_slider_png},
        // {id: 23, img: img_one, img_png: img_one_png},
        // {id: 24, img: img_two_slider, img_png: img_two_slider_png},
        // {id: 25, img: img_three_slider, img_png: img_three_slider_png},
        // {id: 26, img: img_four_slider, img_png: img_four_slider_png},
        // {id: 27, img: img_one, img_png: img_one_png},
        // {id: 28, img: img_two_slider, img_png: img_two_slider_png},
        // {id: 29, img: img_three_slider, img_png: img_three_slider_png},
        // {id: 30, img: img_four_slider, img_png: img_four_slider_png},
    ]

    let historyText = 'Попадая в Японию - начинается путешествие в другой мир. Абсолютно не похожая на все кухни мира, именно японская кухня повсеместно влюбляет в себя всех. Вдохновившись каноническими блюдами, наши повара подготовили для вас необыкновенные вкусовые сочетания. Творцы никогда не останавливаются, поэтому в меню ресторана SIBUMI вы обязательно встретите новые вкусовые сочетания из традиционной кухни восточной Азии. Непередаваемая атмосфера аутентичных японских ресторанов отнесет вас за сотни километров отсюда и позволит полностью насладиться кулинарными шедеврами. ';
    let atmosphereText = 'Угольная рыба с молодым горошком и печеными перцами, сашими тай, дикий окунь с лемонграссом и листом кафир лайма, усудзикири из дикого лосося - эти и другие гастрономические вкусы, которые не оставят вас равнодушным. Одна из важнейших составляющих успеха нашего проекта - это закупки. Рыбу доставляем прямиком из сердца рыбных рынков Японии. Для ценителей вин и сакэ, в SIBUMI вас ждет секретная комната для дегустаций с уникальным погребом другого нашего проекта с мировым именем WINE & WHISKEY BY SIMPLE.';
    return (
        <div className="App">

            <link rel="preload" as="image" href={img_one}/>

            <Header bold_block={3} style_element="main_style"/>

            <div className="mainField">

                <PageType title="О ПРОЕКТЕ SIBUMI"/>

                <Information lines={lines}/>

                <div className="history">
                    <HistoryImg history_or_legend_img={rolls} text1="в поисках" text2="вкуса" legend={0}/>

                    <HistoryAndLegend text={historyText}
                                      title={"ИСТОРИЯ"} legend={0}/>
                </div>

                    <LineImg line={pictures}/>


                <div className="delivery">
                    {delivery.map(element => <DelivaryComponent element={element} key={element.id}/>)}
                </div>

                <div className="legend">
                    <HistoryAndLegend text={atmosphereText}
                                      title={"В ПОИСКАХ ВКУСА"} legend={1}/>
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

export default Sibumi;
