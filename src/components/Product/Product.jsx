import style from './Product.module.css'
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/order/orderSlice.js";

export const Product = ({id, image, price, title, weight}) => {

    const dispatch = useDispatch()

    return <article className={style.product}>
        <img src={image} alt={title} className={style.image}/>

        <p className={style.price}>{price}<span className="currency">₽</span></p>

        <h3 className={style.title}>
            <button className={style.detail}>{title}</button>
        </h3>

        <p className={style.weight}>{weight}г</p>

        <button
            className={style.add}
            type="button"
            onClick={()=>{
                dispatch(addProduct({id}))
            }}
        >Добавить</button>
    </article>
}