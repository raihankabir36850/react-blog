import React from "react";
import { Card } from 'antd';

export default function PostCard({ posts, loading }) {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <>
            {posts.map(post => {
                return (
                    <Card key={post.id}>
                        <Card type="inner" title={post.title} extra={<a href="#">Read More</a>}>
                            {post.body}
                        </Card>
                    </Card >
                )
            })}
        </>
    )
}