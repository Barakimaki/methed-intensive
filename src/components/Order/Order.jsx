import style from './Order.module.css'
import {Good} from '../Good/Good.jsx'
import {Count} from '../Count/Count.jsx'

const orders = [{
    id: 1,
    image: '',
    title: 'Супер сырный',
    weight: 512,
    price: 1279,
    amount: 1
}, {
    id: 2,
    image: '',
    title: 'Картошка фри',
    weight: 180,
    price: 245,
    amount: 2
}, {
    id: 3,
    image: '',
    title: 'Жгучий хот-дог',
    weight: 245,
    price: 239,
    amount: 1
}]

export const Order = () => (
        <div className={style.order}>
            <section className={style.wrapper}>
                <div className={style.header} tabIndex="0" role="button">
                    <h2 className={style.title}>Корзина</h2>

                    <span className={style.count}>4</span>
                </div>

                <div className={style.wrap_list}>
                    <ul className={style.list}>
                        {orders.map(({id, image, title, weight, price, amount}) => <li key={id} className={style.item}>
                                <img className={style.image} src={image} alt={title}/>
                                <Good title={title} weight={weight} price={price}/>
                                <Count amount={amount}/>
                            </li>
                        )
                        }
                    </ul>

                    <div className={style.total}>
                        <p>Итого</p>
                        <p>
                            <span className={style.amount}>1279</span>
                            <span className='currency'>₽</span>
                        </p>
                    </div>

                    <button className={style.submit}>Оформить заказ</button>

                    <div className={style.apeal}>
                        <p className={style.text}>Бесплатная доставка</p>
                        <button className={style.close}>Свернуть</button>
                    </div>
                </div>
            </section>
        </div>
    )
;
