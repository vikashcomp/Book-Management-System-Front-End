import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary text-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><b>Book Management System</b> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/books">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/addbooks"> Add Books</Link>
                            </li>
                           
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
