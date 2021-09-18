import { useDispatch, useSelector } from "react-redux";
import { setSelectOption } from '../../redux/actions';
import styles from './select_sort.module.css';

export function SelectSort(props) {

    const dispatch = useDispatch();
    const store = useSelector(store => store)

    const selectHandler = (event) => {
        dispatch(setSelectOption(event.target.value));
    }

    const selectItems = new Set(store.usersReducer.users?.map(i => i.adress.state));

    const optionArray = ['All States'];
    selectItems.forEach(i => optionArray.push(i))




    return (

        <select className={styles.select} onChange={selectHandler}>

            {optionArray.map(i => <option key={i}>{i}</option>)}

        </select>

    )
}