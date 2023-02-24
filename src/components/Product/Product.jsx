import style from './Product.module.css'

export const Product = ({image, price, title, weight}) => {
    return <article className={style.product}>
        <img src={image} alt={title} className={style.image}/>

        <p className={style.price}>{price}<span className="currency">₽</span></p>

        <h3 className={style.title}>
            <button className={style.detail}>{title}</button>
        </h3>

        <p className={style.weight}>{weight}г</p>

        <button className={style.add} type="button">Добавить</button>
    </article>
}