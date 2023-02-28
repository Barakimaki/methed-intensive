import style from './Order.module.css'
import {Good} from '../Good/Good.jsx'
import {Count} from '../Count/Count.jsx'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {orderRequestAsync} from "../../store/order/orderSlice.js";
import {API_URL} from "../../../consts.js";
import {openModal} from "../../store/modalDelivery/modalDeliverySlice.js";


export const Order = () => {

    const dispatch = useDispatch()
    const {totalPrice, totalCount, orderList, orderGoods} = useSelector(state => state.order)

    useEffect(()=>{
        dispatch(orderRequestAsync())
    }, [orderList])

    return <div className={style.order}>
        <section className={style.wrapper}>
            <div className={style.header} tabIndex="0" role="button">
                <h2 className={style.title}>Корзина</h2>

                <span className={style.count}>{totalCount}</span>
            </div>

            <div className={style.wrap_list}>
                <ul className={style.list}>
                    {orderGoods.map(({id, image, title, weight, price, count}) => <li key={id} className={style.item}>
                            <img className={style.image} src={`${API_URL}/${image}`} alt={title}/>
                            <Good title={title} weight={weight} price={price}/>
                            <Count amount={count} id={id}/>
                        </li>
                    )
                    }
                </ul>

                <div className={style.total}>
                    <p>Итого</p>
                    <p>
                        <span className={style.amount}>{totalPrice}</span>
                        <span className='currency'>&nbsp;₽</span>
                    </p>
                </div>

                <button className={style.submit} onClick={()=> dispatch(openModal())}>Оформить заказ</button>

                <div className={style.apeal}>
                    <p className={style.text}>Бесплатная доставка</p>
                    <button className={style.close}>Свернуть</button>
                </div>
            </div>
        </section>
    </div>
}

