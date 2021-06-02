import React from "react"

export default function PostProfile({ post }) {
    const { title, body, userId } = post;
    return (
        <>
            <h1>title :{title}</h1>
            <h1>body : {body}</h1>
            <h1>userId : {userId}</h1>
        </>
    )
}