// import React, {useEffect, useState} from 'react';
// import {motion} from "framer-motion";
//
// const showElems = {
//     open:{
//         y: 0,
//         opacity: 1,
//     },
//     close:{
//         y: 100,
//         opacity: 0,
//     }
// }
// const showElemtsInputs = {
//     open:{
//         y: 0,
//         opacity: 1,
//     },
//     close:{
//         y: 150,
//         opacity: 0,
//     }
// }
//
//
//
// const InputsForm = (props) => {
//
//     const [phone, setPhone] = useState('');
//     const [name, setName] = useState('');
//     const [dirtyPhone, setDirtyPhone] = useState(false);
//     const [dirtyName, setDirtyName] = useState(false);
//
//     const [erroreName, setErroreName] = useState("имя не указано");
//     const [errorePhone, setErrorePhone] = useState("телефон не указан");
//
//     const [readyPhone, setReadyPhone] = useState(false);
//     const [readyName, setReadyName] = useState(false);
//
//     const [formValid, setFormValid] = useState(false);
//
//     const blurHandle = (e) => {
//         switch (e.target.name) {
//             case 'name':
//                 setDirtyName(true)
//                 break
//
//
//             case 'phone':
//                 setDirtyPhone(true)
//                 break
//
//         }
//     };
//
//         const phoneHandler = (e) => {
//             setPhone(e.target.value)
//             const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
//             if (!regex.test(String(e.target.value).toLowerCase())) {
//                 setErrorePhone("некорректный номер");
//             } else {
//                 setErrorePhone("");
//                 setReadyPhone(true);
//             }
//         }
//
//         const nameHandler = (e) => {
//             setName(e.target.value)
//             if ((e.target.value.length > 0) && (e.target.value.length <= 2)) {
//                 setErroreName("некорректное имя");
//             } else {
//                 setErroreName("");
//
//             }
//         }
//
//         useEffect(() => {
//             if (erroreName || errorePhone){
//                 setFormValid(false)
//             } else {
//                 setFormValid(true)
//                 props.setButtonReady(formValid)
//             }
//         },[erroreName, errorePhone])
//
//
//     // console.log(errorePhone+" phone")
//     // console.log(erroreName+" name")
//
//     // console.log(erroreName+" errore")
//
//
//         const checkNameInputChange = (elem) => {
//             // console.log(elem)
//                 switch (elem) {
//                     case 'name':
//                         return e=> nameHandler(e);
//                         break;
//
//                     case 'phone':
//                         return e => phoneHandler(e);
//                         break
//
//                     // case 'email':
//                     //     return (e => emailHandler(e));
//                     //     break
//
//                     // case 'surname': return (e=>surnameHandler(e)); break
//
//                     default:
//                         return ("");
//                         break
//                 }
//
//         }
//
//
//     const checkNameInputBlur = (elem) => {
//         switch (elem) {
//             case 'name':
//                 if(erroreName===false){
//                     setReadyName(true);
//                 }
//                 return e => blurHandle(e);
//                 break;
//
//             case 'phone':
//                 if(errorePhone===false){
//                     setReadyPhone(true);
//                 }
//                 return e => blurHandle(e);
//                 break
//
//             // case 'email':
//             //     return (e => emailHandler(e));
//             //     break
//
//             // case 'surname': return (e=>surnameHandler(e)); break
//
//             default:
//                 return ("");
//                 break
//         }
//
//     }
//         // console.log(formValid+" valid")
//     // console.log(props.elem.id+ " id")
//         const checkValueInputChange = (elem) => {
//             switch (elem) {
//                 case 'name':
//                     return (name);
//                     break;
//
//                 case 'phone':
//                     return (phone);
//                     break
//
//                 // case 'email':
//                 //     return (email);
//                 //     break
//
//                 // case 'surname':
//                 //     return (surName);
//                 //     break
//
//                 default:
//                     return ("");
//                     break
//             }
//
//         }
//
//
//         const checkInput = (elem) => {
//             switch (elem) {
//                 case 'name':
//                     if (dirtyName && erroreName) return <div className="error_text">{erroreName}</div>;
//                     break;
//
//                 case 'phone':
//                     if (dirtyPhone && errorePhone) return (<div className="error_text">{errorePhone}</div>);
//                     break;
//                 //
//                 // case 'email':
//                 //     if (dirtyEmail && erroreEmail) return (<div className="error_text">{erroreEmail}</div>);
//                 //     break;
//
//                 // case 'surname':
//                 //     if (dirtySurname && erroreSurname) return (<div className="error_text">{erroreSurname}</div>);
//                 //     break;
//
//                 default:
//                     return ("");
//                     break
//             }
//
//         }
//
//
//         console.log(readyName+ "name")
//     console.log(readyPhone+ "phone")
//
//
//         return (
//             <motion.div className="element_form" animate={props.elem.active ? "open" : "close"}>
//                 <motion.label className="label" variants={showElems}
//                               transition={{duration: 1, delay: 1}}>{props.elem.title}</motion.label>
//                 <motion.input onChange={checkNameInputChange(props.elem.name)} onBlur={checkNameInputBlur(props.elem.name)}
//                               className="text_line" type="text" value={checkValueInputChange(props.elem.name)}
//                               name={props.elem.name} placeholder={props.elem.placeholder} variants={showElemtsInputs}
//                               transition={{duration: 1, delay: 1}}/>
//                 {checkInput(props.elem.name)}
//             </motion.div>
//         );
//     };
//
// export default InputsForm;