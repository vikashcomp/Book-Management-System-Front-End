import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookSection from '../components/BookSection';

const Books = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/getbooks");
        setData(response.data); // Store the response data in the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, []);
  return (
    <div className='bg-dark' style={{ minHeight: "91.5vh" }}>
      <div className='d-flex justify-content-center align-items-center'>
        <h4 className='text-white'>Books Section</h4> 
      </div>
      
      {data?<BookSection data={data} />:<div className='text-white'>Loading...</div>}
           
    </div>
  )
}

export default Books;
