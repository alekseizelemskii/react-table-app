import { useDispatch, useSelector } from "react-redux";
import { setSortConfig } from "../../redux/actions";
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';


export function ColumnSort() {

    const dispatch = useDispatch();
    const sortConfig = useSelector(store => store.filterReducer.sortConfig);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        dispatch(setSortConfig({ key, direction }))
    }

    return (
            <thead>
                <tr>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('id')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}id</th>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('firstName')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}first name</th>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('lastName')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}last name</th>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('email')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}email</th>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('phone')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}phone</th>
                    <th style={{cursor: 'pointer'}} onClick={() => requestSort('state')}>{(sortConfig?.direction === 'ascending' ? <BsArrowUp/> : <BsArrowDown/> )}state</th>
                </tr>
            </thead>
    )
}