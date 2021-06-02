import React from "react";
import { Card } from 'antd';
import { Link } from "react-router-dom"

export default function PostCard({ posts, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            {posts.map(post => {
                return (
                    <Card key={post.id}>
                        <Card type="inner" title={post.title} extra={<Link to={`/posts/${post.id}`}>Read More</Link>}>
                            {post.body}
                        </Card>
                    </Card >
                )
            })}
        </>
    )
}