import React, { useEffect, useState } from 'react';
import img_on_basket from '../picture_izBrazzerie/img3.webp'
import img_on_basket_png from '../picture_izBrazzerie/img3.png'
import Header from "../HeaderBlock/Header";
import PageType from "../PageType/PageType";
import OrderCard from "../BasketPage/OrderCard";
import { motion } from "framer-motion";
import ButtonsOrder from "../BasketPage/ButtonsOrder";
import DeliveryType from "../BasketPage/DeliveryType";
import ContactData from "../BasketPage/ContactData";
import TimeOrder from "../BasketPage/timeOrder";
import PayOrder from "../BasketPage/PayOrder";
import "../BasketPage/css/Basket.css"
import "../BasketPage/css/Forms.css"
import { Provider, useSelector } from "react-redux";
import store, { persister } from "./PersistReduxConfiguration";
import { PersistGate } from "redux-persist/integration/react";
import axios from 'axios';

const BasketPage = () => {

	const [activeWindow, setActiveWindow] = useState(false);

	const element = useSelector((state) => state.index);
	const allPrice = useSelector((state) => state.allSumm)

	const [deliveryAdress, setDeliveryAdress] = useState({ street: '', house: '', floor: '', doorphone: '' })
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [comment, setComment] = useState('');

	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

	const [deliveryType, setDeliveryType] = useState('DeliveryByClient');
	const [stateTime, setStateTime] = useState('time1');
	const [timeContent, setTimeContent] = useState('');
	const [statePay, setStatePay] = useState('SITE');


	const setDelivery = (delivery) => {
		setDeliveryType(delivery)
	}


	let mp = element.map(order =>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persister}>
				<OrderCard masline={element.length} order={order} key={order.id} />
			</PersistGate>
		</Provider>
	);

	let mpFinish = element.map(order =>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persister}>
				<OrderCard masline={element.length} order={order} key={order.id} type={"finishWindow"} />
			</PersistGate>
		</Provider>
	);

	const [activeLastWindow, setActiveLastWindow] = useState(false);

	const submitEvent = () => {
		setActiveLastWindow('true')
		axios.post('/api/delivery', {
			data: element,
			metadata: {
				orderServiceType: deliveryType,
				payment: statePay,
				phone: phone,
				customer: {
					name: name,
					surname: surname,
						email: email
				},
				completeBefore: stateTime == 'time2' ? timeContent : null,
				comment: comment,
				deliveryPoint: deliveryType == 'deliveryByCourier'? {
					address: {
						...deliveryAdress,
						street: {
							name: deliveryAdress.street,
							city: 'Владивосток'
						}
					}
				} : null
			}

		}).then(response => response.data)
			.then(data => window.location.href = data.url)
	}
	const [validForm, setValidForm] = useState(false);
	const [phoneEr, setPhoneEr] = useState(false);
	const [emailEr, setEmailEr] = useState(false);
	const [nameEr, setNameEr] = useState(false);
	const [addrEr, setAddrEr] = useState(false);
	const [konfEr, setKonfEr] = useState(false);
	const [surnameEr, setSurnameEr] = useState(false);
	const [streetEr, setStreetEr] = useState(false);
	const [numberEr, setNumberEr] = useState(false);


	useEffect(() => {
			if (phoneEr === true && emailEr === true && nameEr === true && surnameEr === true && konfEr === true)
					var commonErr = true
			
			if (deliveryType == 'DeliveryByCourier')
					if (commonErr === true && streetEr === true && numberEr === true) {
							setValidForm(true);
					} else
							setValidForm(false);
			else if (deliveryType == 'DeliveryByClient')
					if (commonErr === true){
							setValidForm(true)
					} else
							setValidForm(false)
			else
					setValidForm(false)

	}, [phoneEr, emailEr, nameEr, surnameEr, konfEr, streetEr, numberEr, deliveryType])

	return (
		<div className="Basket">

			<Header style_element="main_style" />

			<div className={activeLastWindow ? "mainFieldServiceBasket_notActive" : "mainFieldServiceBasket"}>
				<PageType title="ВАША КОРЗИНА" />
				<div className={activeWindow ? "insideWindow active" : "insideWindow"}>
					<div className="header_order">
						<div className="fake_elem_basket" />
						<div className="titles_basket">
							<h1 className="title_header">ВЫ ВЫБРАЛИ:</h1>
							<p className="title2_header">Осталось проверить заказ</p>
						</div>
					</div>

					<div className="positions_order_titles">
						<div className="fake_element" />
						<div className="order_inside_block">
							<div className="titles_points_order">
								<div className="photo_point" />
								<div className="name_point">Название</div>
								<div className="count_point">Кол-во</div>
								<div className="prise_point">Цена</div>
								<div className="delete_point" />
							</div>
						</div>
					</div>

					<div className="order_elements_container">
						{mp}
					</div>
					<motion.div className="line_with_ItogPrise">
						<div className="text_in_border"><div className="prise_line_result"><div className="text_result">СТОИМОСТЬ ЗАКАЗА: <span className="prise_text"> {allPrice} Р</span></div></div></div>
						<div onClick={() => { window.scrollTo({ top: -10000, behavior: "smooth" }); setActiveWindow(true); }} className="button_result"><motion.button whileHover={{ backgroundColor: "white", color: "rgb(206, 189, 160)" }} transition={{ duration: 0.7 }} className="button_order_result" disabled={element.length === 0}>ОФОРМИТЬ ЗАКАЗ</motion.button></div>
					</motion.div>
				</div>



				{/*окно с формами*/}
				<div className={(activeWindow ? "pool_with_forms active" : "pool_with_forms")}>
					<div className="main_form_inside_block">
						<div className="form_one">
							<form className="main_form_block_one">
								<div className="title_form_one">
									<div className="first_title"><span className="number_title_first_title">01/</span>ДАННЫЕ ДОСТАВКИ:</div>
									<div className="second_title"> У нас есть пара вопросов:</div>
								</div>

								<DeliveryType select={setDelivery} delivery={deliveryType} />
								<TimeOrder time={stateTime} callback={setStateTime} contentCallback={setTimeContent} />
								<PayOrder paymentType={statePay} callback={setStatePay} />

								<div className="comments">
									<div className="title_comment">Хотите оставить комментарий?</div>
									<div className="input_one">
										<input className="text_input_one"
											value={comment}
											onChange={(e) => setComment(e.target.value)}
											type="text"
											placeholder="ХОЧУ КАК В ЯПОНИИ" />
									</div>
								</div>

								<ButtonsOrder type="otherQuestions" erKonf={setKonfEr} />
							</form>
						</div>


						<div className="form_two">
							<form className="main_form_block_one">
								<div className="title_form_two">
									<div className="first_title"><span className="number_title_first_title">02/</span>КОНТАКТНЫЕ ДАННЫЕ:</div>
									<div className="second_title"> Уточните, куда привезти заказ:</div>
								</div>

								<ContactData
									delivery={deliveryType}
									deliveryAdress={deliveryAdress}
									phone={phone}
									setPhone={setPhone}
									name={name}
									setName={setName}
									surname={surname}
									setSurname={setSurname}
									email={email}
									setEmail={setEmail}
									setAdress={setDeliveryAdress}
									phoneEr={setPhoneEr}
									emailEr={setEmailEr}
									nameEr={setNameEr}
									surnameEr={setSurnameEr}
									addrEr={setAddrEr}
									streetEr={setStreetEr}
									numberEr={setNumberEr} />
							</form>
						</div>
					</div>
				</div>
				<div className={activeWindow ? "line_with_ItogPrise" : "line_with_ResultForm notActive"}>
					<div onClick={() => setActiveWindow(false)} className="text_in_border_result">
						<motion.button whileHover={{ opacity: 0.5 }} className="go_back_button">ЧТО Я ВЫБРАЛ?</motion.button>
					</div>


					<div className="button_result"><motion.button disabled={validForm === false} onClick={submitEvent} whileHover={{ backgroundColor: "white", color: "rgb(206, 189, 160)" }} transition={{ duration: 0.7 }} className="button_order_result">ОФОРМИТЬ ЗАКАЗ</motion.button></div>
				</div>
			</div>

		</div >

	);
}

export default BasketPage;
