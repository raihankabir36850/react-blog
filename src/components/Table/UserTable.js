import React from "react"
import { Link } from "react-router-dom"
import { DownOutlined } from '@ant-design/icons';
import styles from "./UserTable.module.css"
import { columns } from "./UserTableColumn"


export default function UserTable({ users }) {

    const sorting = () => {
        let newArr = users;
        newArr.sort();
        console.log(newArr)

    }

    return (
        <>
            <table className={styles.tableSection}>
                <tr>
                    {columns.map(column => {
                        return (
                            <th id={column.key} className={styles.tableColumnHeading}>
                                {column.title}
                                {column.render ? <DownOutlined onClick={sorting} /> : null}
                            </th>
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
