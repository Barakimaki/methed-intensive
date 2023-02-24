import style from './Catalog.module.css'
import {Order} from "../Order/Order.jsx";
import {Container} from "../Container/Container";
import {Product} from "../Product/Product.jsx"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {productRequestAsync} from "../../store/product/productSlice.js";
import {API_URL} from "../../../consts.js";

export const Catalog = () => {

    const {products} = useSelector(state => state.product)
    const {category ,activeCategory} = useSelector((state) => state.category)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(category.length){
            dispatch(productRequestAsync(category[activeCategory].title))
        }
    }, [category, activeCategory])

    return (
        <section className={style.catalog}>
            <Container className={style.container}>
                <Order/>
                <div className={style.wrapper}>
                    <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
                    <div className={style.wrap_list}>
                        <ul className={style.list}>
                            {products.map(({id, price, image, title, weight}) => <li  key={id} className={style.item}>
                                    <Product image={`${API_URL}/${image}`} id={id} price={price} title={title} weight={weight}/>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
