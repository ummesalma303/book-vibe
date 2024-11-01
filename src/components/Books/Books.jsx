import { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('./data/booksData.json')
            .then(res => res.json())
        .then(data=>setBooks(data))
    }, [])
    return (
        <div>
            <p className='text-4xl text-center font-playFair font-bold my-9'>Books</p>
            <div  className='grid grid-cols-2 md:grid-cols-3 gap-9 mb-9'>
            {
                books.map((book,i)=><Book key={i} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;