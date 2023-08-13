
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const UpdateBook = () => {
    const location = useLocation();
    const { bookData } = location.state;
    const id=bookData._id

    const [bookFormData, setBookFormData] = useState({
        bookName: "",
        description: "",
        author: "",
        image: "",
        price: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (bookData) {
            setBookFormData({
                bookName: bookData.name,
                description: bookData.description,
                author: bookData.author,
                image: bookData.image,
                price: bookData.price
            });
        }
    }, [bookData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.put(`http://localhost:5000/api/v1/updatebook/${id}`, bookFormData);
            console.log(response);
            // Handle success, e.g., show a success message to the user
        } catch (error) {
            console.log(error);
            // Handle error, e.g., show an error message to the user
        }

        setLoading(false);
    };

    return (
        <div className="container mt-5 mb-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card bg-dark">
                        <div className="card-header text-white">
                            <h3 style={{ color: "red" }}>Update <span style={{ color: "blue" }}>Books</span></h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group mt-1">
                                    <label htmlFor="bookName" className='text-white'>Book Name:</label>
                                    <input type="text" className="form-control" id="bookName" name="bookName" placeholder="Enter book name" value={bookFormData.bookName} onChange={handleInputChange} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="description" className='text-white'>Description:</label>
                                    <textarea className="form-control" id="description" name="description" placeholder="Enter description" value={bookFormData.description} onChange={handleInputChange} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="author" className='text-white'>Author Name:</label>
                                    <input type="text" className="form-control" id="author" name="author" placeholder="Enter author name" value={bookFormData.author} onChange={handleInputChange} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="image" className='text-white'>Image URL:</label>
                                    <input type="text" className="form-control" id="image" name="image" placeholder="Enter image url" value={bookFormData.image} onChange={handleInputChange} />
                                </div>
                                <div className="form-group mt-1">
                                    <label htmlFor="price" className='text-white'>Price:</label>
                                    <input type="text" className="form-control" id="price" name="price" placeholder="Enter price" value={bookFormData.price} onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3" disabled={loading}>{loading ? "Loading..." : "Update Book"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateBook;

