import { useSelector } from "react-redux"
import styles from './user_description.module.css'

export function UserDescription (props) {
    
    const user = useSelector(store => store.usersReducer.selectedUser);
    
    return (
        <div className={styles.wrapper}>
            <h2>Profile Info:</h2>
            <hr/>
            <p>Selected Profile: {user?.firstName} {user?.lastName}</p>
            <p>Description: {user.description}</p>
            <p>Address: {user.adress.streetAddress}</p>
            <p>City: {user.adress.city}</p>
            <p>State: {user.adress.state}</p>
            <p>Address: {user.adress.streetAddress}</p>
            <p>Index: {user.adress.zip}</p>
        </div>
    )
}