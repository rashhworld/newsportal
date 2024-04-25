import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container container-main text-center">
            <h1>Page Not Found</h1>
            <img className="my-3" src="assets/notfound.png" alt="" height={350} />
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <Link className="btn btn-warning rounded-0" to="/">Back to Home</Link>
        </div>
    )
}

export default NotFound