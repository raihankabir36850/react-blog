import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Comment from "../../components/Comment/Comment"
import LoadingSpin from "../../components/Spin/LoadingSpin"
import PostProfile from "../../components/Post/PostProfile"

export default function PostView() {
    const { id } = useParams();
    const [post, setPost] = useState({})
    const [postComment, setPostComment] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => res.json())
                .then(data => {
                    setPost(data)
                    setLoading(false)
                })
        }
        fetchPost();
    }, [id])


    useEffect(() => {
        const fetchPostComment = async () => {
            setLoading(true)
            await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                .then(res => res.json())
                .then(data => {
                    setPostComment(data)
                    setLoading(false)
                })
        }
        fetchPostComment();
    }, [id])

    if (loading) {
        return <LoadingSpin />
    }

    return (
        <>
            <PostProfile post={post} />
            <Comment comments={postComment} />
        </>
    )
}