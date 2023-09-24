import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { useContext, useState } from 'react'
import { ArticlesContext } from '../../context/ArticlesContext'

const FormSearchFilter = () => {
    const { articles, setArticles } = useContext(ArticlesContext)
    const { searchInputInfo, setSearchInputInfo } = useContext(ArticlesContext)
    const { filterOption, setFilterOption } = useContext(ArticlesContext)
    const [categories, setCategories] = useState([])
    if (articles.length > 0) {
        articles.map((item) => {
            let cat = categories.some((e) => item.categoryId === e)
            if (!cat) {
                setCategories([...categories, item.categoryId])
            }
        })
    }
    categories.sort()
    const preventFormSubmit = (e) => {
        e.preventDefault()
    }
    const emitterFilter = (evt) => {
        setFilterOption(evt.target.value)
    }
    const emitterSearch = (evt) => {
        const infoInput = {
            value: evt.target.value,
            which: evt.which || evt.keyCode,
            key: evt.key,
            keyCode: evt.keyCode
        }
        setSearchInputInfo(infoInput)
    }
    const emitterValue = () => {
        const inputValue = document.getElementById('input_search')
        const infoInput = {
            value: inputValue.value,
            which: 13,
            key: "Enter",
            keyCode: 13
        }
        setSearchInputInfo(infoInput)
    }
    return (
        <div className={styles["tienda__buscar--flex"]}>
            <form onSubmit={preventFormSubmit} key="form" id="form_search" className={styles["tienda__buscar--flex"]} action="">
                <span className={styles["text--format"]}>Categorías: </span><div key="di">
                    {categories.map((item, index) => <Link key={item + 2} to={`category/${item}`}><button key={index + 1} className={styles["button--format"]}>{item}</button></Link>)}
                    <Link to='category/all'><button key="all" className={styles["button--format"]}>todas</button></ Link>
                </div>
                <label key="la" id="label_order" className="label_filter" htmlFor="filterOrder">
                    <select onChange={emitterFilter} key="sel" id="filterOrder">
                        <option key="op1" value="">Ordenar por...</option>
                        <option key="op2" value="mayor">Mayor precio</option>
                        <option key="op3" value="menor">Menor precio</option>
                        <option key="op4" value="a-z">A - Z</option>
                        <option key="op5" value="z-a">Z - A</option>
                    </select>
                </label>
            </form>
            <div>
                <input key="inpu1" id="input_search" onKeyDown={emitterSearch} className={styles["buscar__input"]} name="buscar" type="text" placeholder="Buscar" />
                <input key="inpu2" id="input_button_search" onClick={emitterValue} className={styles["buscar__button"]} type="submit" title="buscar" value="buscar" />
            </div>
        </div>
    )
}
export default FormSearchFilter