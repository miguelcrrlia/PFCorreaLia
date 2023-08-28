import styles from "./styles.module.css"
const FormSearchFilter = () => {
    return ( 
        <form id="form_search" className={styles["tienda__buscar--flex"]} action="">
            <label id="label_order" className="label_filter" htmlFor="filterOrder">
                <select id="filterOrder">
                    <option value="">Ordenar por...</option>
                    <option value="mayor">Mayor precio</option>
                    <option value="menor">Menor precio</option>
                    <option value="a-z">A - Z</option>
                    <option value="z-a">Z - A</option>
                </select>
            </label>
            <label id="label_filter" className={styles["label_filter"]} htmlFor="filterCategory">
                <select id="filterCategory">
                    <option value="">Seleccione una categoría...</option>
                </select>
            </label>
            <div>
                <input id="input_search" className={styles["buscar__input"]} name="buscar" type="text" placeholder="Buscar" />
                <input id="input_button_search" className={styles["buscar__button"]} type="button" title="buscar" value="buscar" />
            </div>
        </form>
    )
}

export default FormSearchFilter