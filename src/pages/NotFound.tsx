import {NavLink} from "react-router";

const NotFoundPage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center gap-4 h-100'>
            <h1>❌ 404 — Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <NavLink to="/">Go to Home</NavLink>
        </div>
    )
}

export default NotFoundPage