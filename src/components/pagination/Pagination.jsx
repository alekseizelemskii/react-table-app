import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "../../redux/actions";
import styles from './pagination.module.css'

export function Pagination({ totalUsers }) {

    const store = useSelector(store => store);

    const dispatch = useDispatch()

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil((totalUsers / store.paginationReducer.usersPerPage)); i++) {
        pageNumbers.push(i);

    }

    const paginate = (number) => dispatch(setCurrentPage(number))

    return (
        <div className={styles.wrapp}>
            {
                pageNumbers.map(i => (
                    <button key={i} onClick={() => paginate(i)}>{i}</button>
                ))
            }
        </div>
    )
}