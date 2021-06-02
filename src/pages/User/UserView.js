import React, { useState, useEffect } from "react"
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
    }, [id])

    const lastIndexOfUserPost = currentPage * perPage;
    const firstIndexOfUserPost = lastIndexOfUserPost - perPage;
    const currentUserPost = userPost.slice(firstIndexOfUserPost, lastIndexOfUserPost);

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <UserProfile data={user} />
            <PostCard posts={currentUserPost} />
        </>
    )
}