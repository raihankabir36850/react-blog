import React, { useState, useEffect } from "react"
import { Pagination } from "antd"
import { useParams } from "react-router-dom"
import UserProfile from "../../components/Profile/UserProfile"
import PostCard from "../../components/Post/PostCard"

export default function UserView() {

    const { id } = useParams();
    const [user, setUser] = useState({})
    const [userPost, setUserPost] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const perPage = 5;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                    setLoading(false);
                })
        }
        fetchUser();
    }, [id])

    useEffect(() => {
        const fetchUserPost = async () => {
            setLoading(true);
            await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(res => res.json())
                .then(data => {
                    setUserPost(data);
                    setLoading(false);
                })
        }
        fetchUserPost();
    }, [id, currentPage, setCurrentPage])

    const lastIndexOfUserPost = currentPage * perPage;
    const firstIndexOfUserPost = lastIndexOfUserPost - perPage;
    const currentUserPost = userPost.slice(firstIndexOfUserPost, lastIndexOfUserPost);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const paginate = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            <UserProfile data={user} />
            <PostCard posts={currentUserPost} />
            <Pagination
                current={currentPage}
                total={userPost.length}
                pageSize={perPage}
                onChange={paginate}
            />
        </>
    )
}