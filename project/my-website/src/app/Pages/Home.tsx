import { Outlet, Link } from "react-router-dom";

export default function Home() 
{
    return(
        <>
        <nav>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    );
}

