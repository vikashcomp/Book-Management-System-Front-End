import React from 'react';
import girl from '../images/girl.jpg';
import {useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className='Home-page bg-dark text-white container-fluid h-100'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex justify-content-center align-items-start flex-column'>
                            <h2 style={{ fontSize: "60px" }}>Book Management System</h2>
                            <button type="button" class="btn btn-outline-light mt-3" onClick={()=>navigate('/books')}>View Books</button>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center mt-5'>
                            <img src={girl} className='img-fluid' alt='/' height="1000px" width="700px" />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Home
