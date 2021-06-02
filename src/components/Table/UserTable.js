import React from "react"
import { Link } from "react-router-dom"
import styles from "./UserTable.module.css"
import { columns } from "./UserTableColumn"

export default function UserTable({ users, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <table className={styles.tableSection}>
                <tr>
                    {columns.map(column => {
                        return (
                            <th id={column.key} className={styles.tableColumnHeading}>{column.title}</th>
                        )
                    })}
                </tr>
                {users.map(user => {
                    return (
                        <tr key={user.id} className={styles.tableRow}>

                            <td className={styles.tableColumn}>
                                <Link to={`/users/${user.id}`}>
                                    {user.name}
                                </Link>
                            </td>
                            <td className={styles.tableColumn}>{user.email}</td>
                            <td className={styles.tableColumn}>{user.website}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
