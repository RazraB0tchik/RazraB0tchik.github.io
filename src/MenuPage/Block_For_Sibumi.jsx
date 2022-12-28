import React from 'react';
import LinksPool from "./Line_with_links";
import { useState } from "react";
import cardPicture from "../picture_izBrazzerie/img4.webp";
import cardPicturePng from "../picture_izBrazzerie/img4.png";
import Page_With_Position from "./Page_With_Position";
import GenerateMass from "../Pages/functions/generateMass";
import noPicture from "../picture_izBrazzerie/noPicture.jfif";
import { useEffect } from 'react';
import axios from 'axios';

const BlockForSibumi = ({ stateBlock }) => {

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
		setlSibumi(list)
		setActive_linkElement(list[0].id)
	}

	// Запрос на получение каталога
	useEffect(() => {
		axios.get("/api/test/2").then(data => loadData(data))
	}, [])

	// Массив товаров
	const [listSibumi, setlSibumi] = useState([]);

	// Активная категория
	const [active_linkElement, setActive_linkElement] = useState();



	return (
		<div className={stateBlock ? "Sibumi_main_block" : "Sibumi_main_block_notActive"}>
			<LinksPool active={active_linkElement} setActive={setActive_linkElement} list_map={listSibumi} />
			{/* eslint-disable-next-line react/jsx-pascal-case */}
			<Page_With_Position variant_menu={GenerateMass(listSibumi, active_linkElement)} page={'SIBUMI'} />
		</div>
	);
};

export default BlockForSibumi;
