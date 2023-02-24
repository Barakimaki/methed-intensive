import style from './Good.module.css'


export const Good = ({title, weight, price}) => (
    <div className={style.goods}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.weight}>{weight}г</p>
        <p className={style.price}>{price}
            <span className="currency">₽</span>
        </p>
    </div>
);
