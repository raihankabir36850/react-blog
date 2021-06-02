import React from "react"


export default function UserProfile({ data }) {
    const { name, email, website } = data
    return (
        <>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Website: {website}</h4>
        </>
    )
}