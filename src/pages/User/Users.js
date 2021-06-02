import React, { useState, useEffect } from "react"
import { Pagination } from 'antd';
import UserTable from "../../components/Table/UserTable"

export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const usersPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            await fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data);
                    setLoading(false)
                })
        }
        fetchUsers();
    }, [currentPage, setCurrentPage])

    const paginate = (page) => {
        setCurrentPage(page)
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);


    return (
        <>
            < UserTable users={currentUser} loading={loading} />
            <Pagination
                current={currentPage}
                total={users.length}
                pageSize={usersPerPage}
                onChange={paginate}
            />
        </>
    )
}