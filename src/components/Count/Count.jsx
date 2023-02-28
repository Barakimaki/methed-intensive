import style from './Count.module.css'
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "../../store/order/orderSlice.js";


export const Count = ({amount, id}) => {

    const dispatch = useDispatch()
    const [count, setCount] = useState(amount)

    useEffect(()=>{
        setCount(amount)
    }, [amount])

    const addCount = () => {
        dispatch(addProduct({id}))
    }

    const removeCount = () => {
            dispatch(removeProduct({id}))
    }

    return (
        <div className={style.count}>
            <button onClick={removeCount} className={style.minus}>-</button>
            <p className={style.amount}>{count}</p>
            <button onClick={addCount} className={style.plus}>+</button>
        </div>
    );
}
