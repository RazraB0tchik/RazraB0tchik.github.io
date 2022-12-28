import React, {useEffect} from 'react';
import {useState} from "react";
import InputMask from "react-input-mask";

const ButtonsOrder = ({type, erKonf}) => {
	const[state, setState] = useState();
	const [konfError, setKonfError] = useState('Примите политику конфиденциальности!');

	function setRadio(event){
		return setState(event.target.value)
	}

	const[stateBox, setStateBox] = useState(false);
	function setBoxCall(event){
		if(stateBox===false){
			setStateBox(true);
		}
		else {
			setStateBox(false);
		}
	}

	const[statePolicy, setStatePolicy] = useState(false);
	function setBoxPolice(event){
		if(statePolicy===false){
			setStatePolicy(true);
			erKonf(true)
			setKonfError('');
		}
		else {
			setStatePolicy(false);
			erKonf(false)
			setKonfError('Примите политику конфиденциальности!');
		}
	}

	const[stateSpam, setStateSpam] = useState(false);
	function setBoxSpam(event){
		if(stateSpam===false){
			setStateSpam(true);
		}
		else {
			setStateSpam(false);
		}
	}


	let styles = {backgroundColor: "white",
		fontFamily: "Conv_SFUIText-Medium",
		// fontSize: "13px",
		color: "rgb(206, 189, 160)",
		// marginBottom: "2vh",
		marginTop: "5px",
		marginLeft: "10px"
	}

	switch (type){
		case "takeOrder":
			return (
				<div className="first_question_pool">
					<div className="question_one"> Как вы хотите забрать заказ?</div>
					<div className="answers_question_one">
						<div className="answers_one">
							<label className="elem_form" >
								<input  className="radio" type="radio" value="export1" checked={state === "export1" ? true : false} onChange={setRadio}/>
								<span className="fake"/>
								САМОВЫВОЗ
							</label>
						</div>
						<div className="answer_two">
							<label className="elem_form" >
								<input className="radio" type="radio" value={"export2"} checked={state === "export2" ? true : false} onChange={setRadio}/>
								<span className="fake"/>
								ДОСТАВКА
							</label>
						</div>
					</div>
				</div>
			);

		case "otherQuestions":
			return (
				<div className="fours_question_pool">
					<div className="checkBox_last_question">
						<label className="label_form_order">
							<input type="checkbox" className="checkbox" value="privacyPolicy" checked={statePolicy} onChange={setBoxPolice}/>
							<span className="checkbox_new"/>
							Я согласен с политикой конфиденциальности
						</label>
						{(konfError) && <div className="errorElementForm" style={styles}> {konfError}</div>}
					</div>

					<div className="checkBox_last_question">
						<label className="label_form_order">
							<input type="checkbox" className="checkbox" value="privacySpam" checked={stateSpam} onChange={setBoxSpam}/>
							<span className="checkbox_new"/>
							Хочу получать рассылку на вкусном
						</label>
					</div>

					<div className="checkBox_last_question">
						<label className="label_form_order">
							<input type="checkbox" value="privacyCall" className="checkbox" checked={stateBox} onChange={setBoxCall}/>
							<span className="checkbox_new"/>
							Оформить без звонка оператора
						</label>
					</div>
				</div>
			);

	}
};

export default ButtonsOrder;
