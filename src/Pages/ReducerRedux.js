import {createSlice} from "@reduxjs/toolkit";
import orderCard from "../BasketPage/OrderCard";


const orderPos = createSlice({ //данная фича исключает мутации в стейте
    name: 'order',
    initialState: {
        index: [],
        allSumm: 0,
        onBasket: false,
    },

    reducers: {
        addOrder: (state, action) => {
            if(state.index.find(elem => elem.id===action.payload.id)){
                state.onBasket = true
                console.log(state.onBasket + " in bask")
            }
            else {
                state.onBasket = false
                state.index.push({...action.payload})
                state.allSumm += action.payload.price;
                console.log(state.onBasket + " no bask")
            }
        },

        uppCount: (state, action) => {
            const order = state.index.find(elem => elem.id===action.payload.id);
            order.count++;
            order.summa = order.summa + order.price;
            state.allSumm += order.price;
        },
        delCount: (state, action) => {
            const order = state.index.find(elem => elem.id===action.payload.id);
            order.count--;
            order.summa=order.summa - order.price;
            state.allSumm -= order.price;
        },

        delOrderPosition: (state, action) => {
            const order = state.index.find(elem => elem.id===action.payload.id);
            state.allSumm -= order.price * order.count;
            let masFilter = state.index.filter(elem => elem.id!==action.payload.id);
            state.index = masFilter;
        },
        clearAll: (state, action) => { //полная очистка лс и суммы (необходимо обернуть компонент, который будет работать с лс: <Provider store={store}><PersistGate loading={null} persistor={persister}><Basket/></PersistGate></Provider> пример вызова функций redux смотрите в папке MainPage, компоненты CardMenu и Button_Count
            state.index.length = 0;
            state.allSumm = 0;
        }
    }
})

export const orderReductor = orderPos.reducer;

export const {addOrder, uppCount, delCount, delOrderPosition, uppBasket} = orderPos.actions;
