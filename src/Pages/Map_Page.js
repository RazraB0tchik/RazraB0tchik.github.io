import React from 'react';
import "../MainPage/css/StartPage.css"
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import "../picture_izBrazzerie/mtk.jpg"
import markElem from '../picture_izBrazzerie/mtk.jpg'
const MapPage = ({page_status}) => {

    return (
        <div className={page_status==="main_page" ? "map_element" : "map_element_standart"}>

            <YMaps query={{ load: "package.full" }}>
                <Map defaultState={{ center: [43.121528, 131.928704], zoom: 14, controls: [], behaviors: []}} width='100%' height='100%' modules={['layout.Image']} >
                <Placemark defaultGeometry={[43.119504, 131.880580]}

                           properties={{
                               balloonContent: '<div class="baloon_placemarket"> <div>Ресторан Sibumi</div> <div>+7 (423) 242-88-88</div>' + '</div>',
                               hintContent: '<b class="textHint"> Sibumi </b>',
                        iconContent: '<div class="circle-marker__point">' +
                        '<img class="circle-marker__point_img" alt="picture" src="/image/metka.jpg" style="position: relative; z-index: 111; color: #d0bd9f"/>' +
                        '</div>',
                        }}
                           options={{
                               // preset: 'islands#icon',
                               iconLayout: "default#imageWithContent",
                               iconImageSize: [35, 35],
                               iconImageHref: "/img/metka.jpg",
                               iconImageOffset: [-45, -40],
                }}
                />

                    <Placemark defaultGeometry={[43.120452, 131.881047]}

                               properties={{
                                   balloonContent: '<div class="baloon_placemarket"> <div>Ресторан Is Brasserie, Кондитория</div> <div>+7 (423) 222-25-35, +7 (423) 222-66-23</div>' + '</div>',
                                   hintContent: '<b class="textHint"> Is Brasserie, Кондитория </b>',
                                   iconContent: '<div class="circle-marker__point">' +
                                       '<img class="circle-marker__point_img" alt="picture" src="/image/metka.jpg" style="position: relative; z-index: 111; color: #d0bd9f"/>' +
                                       '</div>',
                               }}
                               options={{
                                   // preset: 'islands#icon',
                                   iconLayout: "default#imageWithContent",
                                   iconImageSize: [35, 35],
                                   iconImageHref: "/img/metka.jpg",
                                   iconImageOffset: [-45, -40],
                               }}
                    />

                    <Placemark defaultGeometry={[43.124281, 131.956065]}

                               properties={{
                                   balloonContent: '<div class="baloon_placemarket"> <div>Ресторан Кондитория</div> <div>+7 (902) 556-02-60</div>' + '</div>',
                                   hintContent: '<b class="textHint"> Кондитория </b>',
                                   iconContent: '<div class="circle-marker__point">' +
                                       '<img class="circle-marker__point_img" alt="picture" src="/image/metka.jpg" style="position: relative; z-index: 111; color: #d0bd9f"/>' +
                                       '</div>',
                               }}
                               options={{
                                   // preset: 'islands#icon',
                                   iconLayout: "default#imageWithContent",
                                   iconImageSize: [35, 35],
                                   iconImageHref: "/img/metka.jpg",
                                   iconImageOffset: [-45, -40],
                               }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default MapPage;
