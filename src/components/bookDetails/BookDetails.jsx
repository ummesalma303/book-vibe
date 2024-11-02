import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, setStoredWishList } from '../../utility/addToDb';

const BookDetails = () => {
    const { bookId } = useParams()
    const id= parseInt(bookId)
    const data = useLoaderData();
    // console.log(data)
    // console.log(bookId)
    const bookDetail = data.find(book => id === book.bookId);
    const {image,review,rating,totalPages,bookName,category,publisher,yearOfPublishing,author,tags}= bookDetail
  
  const handleMarkAsRea = (id) => {
    console.log(id);
    addToStoredReadList(id)
  }
  const handleWishlist = (id) => {
    setStoredWishList(id)
}

    return (
        <div className='my-20'>
          <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row space-x-7 px-8">
    <img
      src={image}
      className="max-w-72 rounded-lg shadow-2xl" />
    <div className='font-workSans'>
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
                            <div className='space-x-4'>
                <span className='text-[#131313B3] '>Number of Pages:</span>
                <span>{totalPages}</span>
                            </div>
                            <div className='space-x-4'>
                <span className='text-[#131313B3] '>Year Of Publishing:</span>
                <span>{yearOfPublishing}</span>
              </div>
              <div className='space-x-4'>
                <span className='text-[#131313B3] '>publisher:</span>
                <span>{publisher}</span>
              </div>
              <div className='space-x-4'>
                <span className='text-[#131313B3] '>Rating:</span>
                <span>{rating}</span>
                            </div>
              <div className='my-5'>
              <button onClick={()=>handleMarkAsRea(bookId)} className="btn ">Read</button>
      <button onClick={()=>handleWishlist(bookId)} className="btn bg-blue-500 text-white">Wishlist</button>

     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookDetails;