import React, { useState } from 'react';
import LinksPool from "../MenuPage/Line_with_links"
import Page_With_Position from "./Page_With_Position";
import cardPicture from "../picture_izBrazzerie/img3.webp"
import cardPicturePng from "../picture_izBrazzerie/img3.png";
import GenerateMass from "../Pages/functions/generateMass";
import noPicture from "../picture_izBrazzerie/noPicture.jfif";
import { useEffect } from 'react';
import axios from 'axios';

const BlockForIzBrasserie = ({ stateBlock }) => {

	function loadData(data) {
		// Если у товара отсутствует изображение, то мы добавляем ему шаблонную картинку
		// Поиск идет по всем категориям и по всем товарам внутри них
		data.data.forEach(element => {
			element.products.forEach(element => {
				if(element.img_elem == undefined) {
					element.img_elem = noPicture;
					element.img_png_elem = noPicture; 
				}
			})
		})

		let list = data.data
		setIzBrasserie(list)
		setActive_linkElement(list[0].id)
	}

	// Запрос на получение каталога
	useEffect(() => {
		axios.get("/api/test/1").then(data => loadData(data))
	}, [])

	// Массив товаров
	const [listIzBrasserie, setIzBrasserie] = useState([]);

	// Активная категория
	const [active_linkElement, setActive_linkElement] = useState();


	return (
		<div className={stateBlock ? "izBrasserie_main_block" : "izBrasserie_main_block_notActive"}>
			<LinksPool active={active_linkElement} setActive={setActive_linkElement} list_map={listIzBrasserie} />
			{/* eslint-disable-next-line react/jsx-pascal-case */}
			<Page_With_Position variant_menu={GenerateMass(listIzBrasserie, active_linkElement)} page={'IZ BRASSERIE'} />
		</div>
	);
};

export default BlockForIzBrasserie;
