import style from './Navigation.module.css'
import {Container} from "../Container/Container.jsx"
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../store/category/categorySlice.js";

export const Navigation = () => {

    const dispatch = useDispatch()
    const {category, activeCategory} = useSelector((state) => state.category)


    return <nav className={style.navigation}>
        <Container className={style.container}>
            <ul className={style.list}>
                {category.map((item, i) => {
                    return <li className={style.item}>
                        <button
                            className={classNames(
                                style.button,
                                i === activeCategory ? style.button_active : ''
                            )}
                            style={{
                                backgroundImage: `url(${item.image})`
                            }}
                            onClick={() => dispatch(changeCategory(i))}
                        >
                            {item.rus}
                        </button>
                    </li>
                })}
            </ul>
        </Container>
    </nav>
};
