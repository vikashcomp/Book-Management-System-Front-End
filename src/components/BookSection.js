
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const BookSection = ({ data }) => {
    const booksArray = data.books || [];
    const [search, setSearch] = useState()
    const [filteredBooks, setFilteredBooks] = useState(booksArray);

    const navigate = useNavigate()
    const params = useParams()
   

    useEffect(() => {
        if (search) {
            const filtered = booksArray.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks(booksArray);
        }
    }, [search, booksArray]);

    const handleUpdate = (_id) => {
        const fetch = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/getbooks/${_id}`)
                console.log("data", response.data.book)
                const bookData = response.data.book;
                navigate('/updatebooks', { state: { bookData } })
            } catch (error) {
                console.log(error)
            }
        }

        fetch()

    }

    const handleDelete = async (_id) => {
        try {
            let answer = window.prompt("Are you sure to want to delete this product ?")
            if (!answer)
                return
            const { data } = await axios.delete(`http://localhost:5000/api/v1/deletebook/${_id}`)
            console.log("data", data)
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <div className='d-flex justify-content-center'>
                <form class="d-flex" role="search" style={{width:"300px"}}>
                    <input class="form-control me-2" type="text" placeholder="Search here.." aria-label="Search" onChange={(e) => setSearch(e.target.value)} />

                </form>
            </div>

            <div className="container mt-5">
                <div className='row'>
                    {filteredBooks.length > 0 && filteredBooks.map((item) => (
                        <div className='col-md-3'>
                            <div className="card" style={{ width: '18rem',marginTop:"30px" }} key={item.id}>
                                <img src={item.image} className="card-img-top img-fluid" height="300px" alt="/" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name.slice(0, 20)}...</h5>
                                    <p className="card-text">{item.description.slice(0,50)}..</p>
                                    <h3>Rs:{item.price}</h3>
                                    <button className="btn btn-primary float-left "  onClick={() => handleUpdate(item._id)}>Update</button>
                                    <button className="btn btn-danger  delete-button"  onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>

            </div>
        </>
    );
}

export default BookSection;








