import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getBook, getStoredWishList, removeReadList } from '../../utility/addToDb';

const ListedBooks = () => {
    const [readList, setReadList] = useState([])
    const[wishList,setWishList]=useState([])
    
    const allBooks = useLoaderData()
    useEffect(() => {
        const storedReadList = getBook();
        const storedReadListInt = storedReadList.map(id=>parseInt(id))
        const readBookList = allBooks.filter(books => storedReadListInt.includes(books.bookId))
        setReadList(readBookList)
    },[])
    

    useEffect(() => {
        const getWishList = getStoredWishList()
        const wishListInt = getWishList.map(id => parseInt(id));
        const wishList = allBooks.filter(books => wishListInt.includes(books.bookId))
        setWishList(wishList)
    },[])

    const handleRemove = (id) => {
        const books = readList.filter(book => book.bookId !== id)
        setReadList(books)
        removeReadList(id.toString())
    }
    // sort
    const handleRatting = (rating) => {
        if (rating) {
            const sortReadList = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortReadList)
        } 
    }
    const handlePage = (page) => {
        if (page) {
            const sortPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortPage)
        } 
    }

    return (
        <div>

<details className="dropdown my-24">
  <summary className="btn m-1">Sort</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleRatting('Ratings')}><a>Ratting</a></li>
                    <li onClick={() => handlePage('Page')}><a>Number Of Pages</a></li>
  </ul>
</details>





            <Tabs>
    <TabList>
                    <Tab>
                        <h2>Read List</h2>

                        <div className='space-y-6'>
                        {
                            readList.map((book,i) => (
                                <div key={i}>
                                    <img className='w-40' src={book.image} alt="" />
                                    <h2>{book.bookName}</h2>
                                    <h2>Ratting: {book.rating}</h2>
                                    <h3>Book page: {book.totalPages}</h3>
                                    <button onClick={()=>handleRemove(book.bookId)} className='btn my-4'>Remove</button>
                                </div>
                            ))
                        }
                        </div>
      </Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>BOOks I Read</h2>
    </TabPanel>
    <TabPanel>
                    {
                        wishList.map(book => (
                            <div key={book.bookId}>
                                <img className='h-44' src={book.image} alt="" />
                                <h2>Ratting: {book.rating}</h2>
                                <h3>Book page: {book.totalPages}</h3>
                            </div>
                        ))
     }
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;