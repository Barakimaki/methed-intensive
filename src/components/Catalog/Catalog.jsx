import style from './Catalog.module.css'
import {Order} from "../Order/Order.jsx";
import {Container} from "../Container/Container";
import {Product} from "../Product/Product.jsx"

const products = [{
    id: 1,
    image: '',
    price: 689,
    title: 'Мясная бомба',
    weight: 520
}, {
    id: 2,
    image: '',
    price: 550,
    title: 'Супер сырный',
    weight: 512
}, {
    id: 3,
    image: '',
    price: 639,
    title: 'Сытный',
    weight: 580
}, {
    id: 4,
    image: '',
    price: 480,
    title: 'Тяжелый удар',
    weight: 470
}, {
    id: 5,
    image: '',
    price: 450,
    title: 'Вечная классика',
    weight: 450
}, {
    id: 6,
    image: '',
    price: 560,
    title: 'Итальянский',
    weight: 510
}]

export const Catalog = () => {
    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                <Order/>
                <div className={style.wrapper}>
                    <h2 className={style.title}>Бургеры</h2>
                    <div className={style.wrap_list}>
                        <ul className={style.list}>
                            {products.map(({id, price, image, title, weight}) => <li  key={id} className={style.item}>
                                    <Product image={image} price={price} title={title} weight={weight}/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
