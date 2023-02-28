import style from './Navigation.module.css'
import {Container} from "../Container/Container.jsx"
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {categoryRequestAsync, changeCategory} from "../../store/category/categorySlice.js";
import {useEffect} from "react";
import {API_URL} from "../../../consts.js";

export const Navigation = () => {

    const dispatch = useDispatch()
    const {category, activeCategory} = useSelector(state => state.category)

    useEffect(()=>{
        dispatch(categoryRequestAsync())
    }, [])

    return <nav className={style.navigation}>
        <Container className={style.container}>
            <ul className={style.list}>
                {category.map((item, i) => <li className={style.item} key={item.title}>
                        <button
                            className={classNames(
                                style.button,
                                i === activeCategory ? style.button_active : ''
                            )}
                            style={{
                                backgroundImage: `url(${API_URL}/${item.image})`
                            }}
                            onClick={() => dispatch(changeCategory(i))}
                        >
                            {item.rus}
                        </button>
                    </li>
                )}
            </ul>
        </Container>
    </nav>
};
