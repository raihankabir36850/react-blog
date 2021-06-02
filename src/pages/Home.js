import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NormalButton from "../components/Button/NormalButton"
import PostTitle from "../components/Post/PostTitle"
import PostCard from "../components/Post/PostCard"

export default function Home() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);

            await fetch("https://jsonplaceholder.typicode.com/posts")
                .then((res) => res.json())
                .then((data) => {
                    setPosts(data);
                    setLoading(false);
                })
        }
        fetchPosts();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <PostTitle />
            <PostCard
                posts={currentPosts}
                loading={loading}
            />
            <Link to="/post?page=1">
                <NormalButton title="Load More" />
            </Link>
        </>
    )
}