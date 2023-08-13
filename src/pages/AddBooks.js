import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBooks = () => {

    const [bookName, setBookName] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

       



        const newBook = {
            name: bookName,
            description: description,
            author: author,
            image: image,
            price: price
        };

        try {
            const response = await axios.post("http://localhost:5000/api/v1/add", newBook);
            console.log(response);
            setBookName("")
            setDescription("")
            setAuthor("")
            setImage("")
            setPrice("")
        } catch (error) {
            console.log(error);
        }
       

        setLoading(false);
    };

   
    return (
       
        <div className="container mt-5 mb-4">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="card bg-dark">
                        <div className="card-header  text-white">
                            <h3 style={{ color: "red" }}>Add <span style={{ color: "blue" }}>Books</span> </h3>
                        </div>
                        <div className="card-body">
                            <form onClick={onSubmit}>
                                <div className="form-group mt-1">
                                    <label for="name" className='text-white'> Book Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter  book name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                                </div>
                                <div className="form-group mt-1">
                                    <label for="name" className='text-white'>Description:</label>
                                    <textarea type="text" className="form-control" id="name" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className="form-group mt-1">
                                    <label for="name" className='text-white'> Author Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter  Author name" value={author}
                                        onChange={(e) => setAuthor(e.target.value)} />
                                </div>
                                <div className="form-group mt-1">
                                    <label for="name" className='text-white'> Image</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter image url" value={image}
                                        onChange={(e) => setImage(e.target.value)} />
                                </div>
                                <div className="form-group mt-1">
                                    <label for="name" className='text-white'> Price</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter price" value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>

                                <button type="submit" className="btn btn-primary mt-3" disabled={loading ? loading : loading}>{loading ? "Loading.." : "Add Item"}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AddBooks
