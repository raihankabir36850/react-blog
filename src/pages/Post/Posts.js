import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import PostTitle from "../../components/Post/PostTitle"
import PostCard from "../../components/Post/PostCard"
import { Pagination } from "antd"


export default function Posts() {
    let history = useHistory();
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
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
    }, [pageNumber, setPageNumber])

    const indexOfLastPost = pageNumber * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (page) => {
        setPageNumber(page)
        history.push(`/posts/page/${page}`)
    }

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <PostTitle />
            <PostCard
                posts={currentPosts}
                loading={loading}
            />
            <Pagination
                current={pageNumber}
                total={posts.length}
                onChange={paginate}
            />

        </div>
    )
}
