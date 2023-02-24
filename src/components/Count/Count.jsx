import style from './Count.module.css'
import {useState} from "react";


export const Count = ({amount}) => {

    const [count, setCount] = useState(amount)

    const addCount = () => {
        setCount(count + 1)
    }

    const removeCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className={style.count}>
            <button onClick={removeCount} className={style.minus}>-</button>
            <p className={style.amount}>{count}</p>
            <button onClick={addCount} className={style.plus}>+</button>
        </div>
    );
}
