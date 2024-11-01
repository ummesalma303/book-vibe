import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams()
    const id= parseInt(bookId)
    const data = useLoaderData();
    // console.log(data)
    // console.log(bookId)
    const bookDetail = data.find(book => id === book.bookId);
    const {image,review,rating,totalPages,bookName,category,publisher,yearOfPublishing,author,tags}= bookDetail
    console.log(bookDetail)
    return (
        <div>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-72 rounded-lg shadow-2xl" />
    <div>
                        <h2 className="card-title font-playFair text-5xl font-bold text-[#131313CC]">{bookName}</h2>
                        <div className='border-y-2 my-2 py-2'>
                        <p>By: {author}</p>

                        </div>
                        <button className="">{category}</button>
                        
      <p className="py-6">
        Review: {review}
                        </p>
                        <div className='flex space-x-5'>
                    {
                        tags.map((tag,i) => <button key={i} className=' bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-lg'>{ tag}</button>)
                    }
                        </div>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;