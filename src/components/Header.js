import { Link } from "react-router-dom"

function Header(){
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/books">Book</Link>
            </nav>
            <h2>Header</h2>
        </>
    )
}

export default Header;