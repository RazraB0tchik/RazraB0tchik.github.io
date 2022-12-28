import React, { useEffect } from 'react';
import { useState } from "react";

const TimeOrder = ({ time, callback, contentCallback }) => {

	function setRadioTime(event) {
		return callback(event.target.value)
	}

	return (
		<div className="second_question_pool">
			<div className="question_two"> К какому времени вы хотите получить заказ?</div>
			<div className="answersTwo">
				<div className="radio_one">
					<div className="elem1">
						<label className="elem_form" >
							<input type="radio" value="time1" className="radio" checked={time == 'time1'? true : false} onChange={setRadioTime} />
							<span className="fake" />
							БЛИЖАЙШЕЕ
						</label>
					</div>

					<div className="elem2">

						<label className="elem_form" >
							<input className="radio" value="time2" type="radio" checked={time === "time2" ? true : false} onChange={setRadioTime} />
							<span className="fake" />
							К ОПРЕДЕЛЕННОМУ
						</label>
					</div>
				</div>
				<div className="input_one">
					<input className="text_input_one" onChange={(event) => {contentCallback(event.target.value)}} type="text" placeholder="ХОЧУ ПОЛУЧИТЬ К 17:00" />
				</div>
			</div>
		</div>
	);

}

export default TimeOrder;
