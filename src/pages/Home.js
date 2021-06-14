import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingSpin from "../components/Spin/LoadingSpin"
import NormalButton from "../components/Button/NormalButton"
import PostTitle from "../components/Post/PostTitle"
import PostCard from "../components/Post/PostCard"

export default function Home() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage] = useState(1)
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

    if (loading) {
        return <LoadingSpin />
    }

    return (
        <>
            <PostTitle />
            <PostCard
                posts={currentPosts}
            />
            <Link to={`/posts/page/${currentPage}`}>
                <NormalButton title="Load More" />
            </Link>
        </>
    )
}