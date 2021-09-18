import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ColumnSort } from '../column-sort/ColumnSort';
import { setUser, getUsers } from '../../redux/actions';
import { SearchByName } from '../search-by-name/SearchByName'
import { SelectSort } from '..//select-sort/SelectSort';
import { UserDescription } from '../user-description/UserDescription';
import { Pagination } from '../pagination/Pagination';
import styles from './data_table.module.css'


export function DataTable() {

    const dispatch = useDispatch();
    const store = useSelector(store => store);

    useEffect(() => {
        dispatch(getUsers())
        console.log('reder');
    }, []);


    const lastUsersIndex = store.paginationReducer.currentPage * store.paginationReducer.usersPerPage;
    const firstUsersIndex = lastUsersIndex - store.paginationReducer.usersPerPage;

    const filteredData = store.usersReducer.users?.filter((user) => {

        if (store.filterReducer.selectOption === 'All States') {
            return user.firstName.toLowerCase().includes(store.filterReducer.searchValue.toLowerCase());
        } else {
            return user.adress.state === store.filterReducer.selectOption && user.firstName.toLowerCase().includes(store.filterReducer.searchValue.toLowerCase())
        }
    });

    const currentUsers = filteredData?.slice(firstUsersIndex, lastUsersIndex);

    if (currentUsers !== null) {

        const keyFromConfig = store.filterReducer.sortConfig.key;
        (keyFromConfig === 'state') ? (
            currentUsers?.sort((a, b) => {
                if (a.adress[keyFromConfig] < b.adress[keyFromConfig]) return store.filterReducer.sortConfig.direction === 'ascending' ? -1 : 1;
                if (a.adress[keyFromConfig] > b.adress[keyFromConfig]) return store.filterReducer.sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            })
        )
            : (
                currentUsers?.sort((a, b) => {
                    if (a[store.filterReducer.sortConfig.key] < b[store.filterReducer.sortConfig.key]) return store.filterReducer.sortConfig.direction === 'ascending' ? -1 : 1;
                    if (a[store.filterReducer.sortConfig.key] > b[store.filterReducer.sortConfig.key]) return store.filterReducer.sortConfig.direction === 'ascending' ? 1 : -1;
                    return 0;
                })
            )
    }

    return (
        <>  
            <div className={styles.container}>
            <SearchByName />
            <SelectSort />
            </div>

            <table className={styles.table}>
                <ColumnSort />
                <tbody>
                    {
                        currentUsers?.map(item => {
                            return (
                                <tr onClick={() => dispatch(setUser(item))} style={{ cursor: 'pointer' }} key={item.phone}>
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.adress.state}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Pagination totalUsers={filteredData?.length} />
            
            {store.usersReducer.selectedUser && <UserDescription />}

        </>
    )
};
