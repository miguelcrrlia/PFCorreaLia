import { Link } from 'react-router-dom'
import styles from "./styles.module.css"
import ItemsGet from '../ItemsGet'
import LoadingMessage from '../LoadingMessage'
import { useState } from 'react'
// import { useParams } from "react-router-dom"

const FormSearchFilter = () => {
    // const { id } = useParams()
    const articles = ItemsGet()
    const [categories, setCategories] = useState([])
    {articles.length > 0 ? (
    
    articles.map((item) => {
        let cat = categories.some((e) => item.category === e )
        if (!cat) {
            setCategories([...categories, item.category])
        }
    })
    ) : (
        <LoadingMessage />
        )}
        categories.sort()
    return ( 
        <form key="form" id="form_search" className={styles["tienda__buscar--flex"]} action="">
            <div key="di">
            {categories.map((item, index) => <Link to={`category/${item}`}><button key={index} className={styles["button--format"]}>{item}</button></Link>)}
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
            {/* <label id="label_filter" className={styles["label_filter"]} htmlFor="filterCategory">
                <select id="filterCategory">
                    <option value="">Seleccione una categoría...</option>
                    {categories.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
            </label> */}
            <div>
                <input key="inpu1" id="input_search" className={styles["buscar__input"]} name="buscar" type="text" placeholder="Buscar" />
                <input key="inpu2" id="input_button_search" className={styles["buscar__button"]} type="button" title="buscar" value="buscar" />
            </div>
        </form>
    )
}

export default FormSearchFilter