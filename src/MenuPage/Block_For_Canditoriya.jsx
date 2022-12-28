import React from 'react';
import cardPicture from "../picture_izBrazzerie/img7.webp";
import cardPicturePng from "../picture_izBrazzerie/img7.png";
import { useState } from "react";
import LinksPool from "./Line_with_links";
import Page_With_Position from "./Page_With_Position";
import GenerateMass from "../Pages/functions/generateMass";
import noPicture from "../picture_izBrazzerie/noPicture.jfif";
import { useEffect } from 'react';
import axios from 'axios';

const BlockForCanditoriya = ({ stateBlock }) => {

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
		setListCanditoriya(list)
		setActive_linkElement(list[0].id)
	}

	// Запрос на получение каталога
	useEffect(() => {
		axios.get("/api/test/3").then(data => loadData(data))
	}, [])


	// Массив товаров
	const [listCanditoriya, setListCanditoriya] = useState([]);

	// Активная категория
	const [active_linkElement, setActive_linkElement] = useState();


	return (
		<div className={stateBlock ? "Canditoriya_main_block" : "Canditoriya_main_block_notActive"}>
			<LinksPool active={active_linkElement} setActive={setActive_linkElement} list_map={listCanditoriya} />
			{/* eslint-disable-next-line react/jsx-pascal-case */}
			<Page_With_Position variant_menu={GenerateMass(listCanditoriya, active_linkElement)} page={'КОНДИТОРИЯ'} />
		</div>
	);
};

export default BlockForCanditoriya;
