import { Link } from 'react-router-dom'
import styles from './styles.module.css'
// import ItemsGet from '../ItemsGet'
import LoadingMessage from '../LoadingMessage'
import { useContext, useState } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'


const FormSearchFilter = () => {
    const {articles, setArticles} = useContext(ArticlesContext)
    const [categories, setCategories] = useState([])
    {articles.length > 0 ? (
        articles.map((item) => {
            let cat = categories.some((e) => item.categoryId === e )
            if (!cat) {
                setCategories([...categories, item.categoryId])
            }
        })
    ) : (
        <LoadingMessage />
        )}
    categories.sort()
    return ( 
        <form key="form" id="form_search" className={styles["tienda__buscar--flex"]} action="">
            <div key="di">
                {categories.map((item, index) => <Link key={item+2} to={`category/${item}`}><button key={index + 1} className={styles["button--format"]}>{item}</button></Link>)}
                <Link to='category/all'><button key="all" className={styles["button--format"]}>todas</button></ Link>
            </div>
            <label key="la" id="label_order" className="label_filter" htmlFor="filterOrder">
                <select key="sel" id="filterOrder">
                    <option key="op1" value="">Ordenar por...</option>
                    <option key="op2" value="mayor">Mayor precio</option>
                    <option key="op3" value="menor">Menor precio</option>
                    <option key="op4" value="a-z">A - Z</option>
                    <option key="op5" value="z-a">Z - A</option>
                </select>
            </label>
            <div>
                <input key="inpu1" id="input_search" className={styles["buscar__input"]} name="buscar" type="text" placeholder="Buscar" />
                <input key="inpu2" id="input_button_search" className={styles["buscar__button"]} type="button" title="buscar" value="buscar" />
            </div>
        </form>
    )
}

export default FormSearchFilter