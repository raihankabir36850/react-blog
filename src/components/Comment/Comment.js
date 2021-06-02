import React from "react"

export default function Comment({ comments }) {

    return (
        <>
            comments
            <hr></hr>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h4>{comment.name}</h4>
                        <h4>{comment.email}</h4>
                        <h4>{comment.body}</h4>
                        <hr></hr>
                    </div>

                )
            })}

        </>
    )
}