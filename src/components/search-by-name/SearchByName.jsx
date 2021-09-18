import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/actions';
import styles from './search_by_name.module.css';

export function SearchByName(props) {

    const store = useSelector(store => store);
    const dispatch = useDispatch();

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                className={styles.search} 
                placeholder={'Search by first name'} 
                type={'text'} 
                onChange={(e) => dispatch(setSearchValue(e.target.value))} 
                value={store.filterReducer.searchValue}></input>
            </form>
        </>
    )
}