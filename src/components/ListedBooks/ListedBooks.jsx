import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getBook } from '../../utility/addToDb';

const ListedBooks = () => {
    const[readList,setReadList]=useState([])
    const allBooks = useLoaderData()
    useEffect(() => {
        const storedReadList = getBook();
        const storedReadListInt = storedReadList.map(id=>parseInt(id))
        const readBookList = allBooks.filter(books => storedReadListInt.includes(books.bookId))
        setReadList(readBookList)
        console.log(readBookList.length);
    },[])
    
    return (
        <div>
            <Tabs>
    <TabList>
                    <Tab>
                        <h2>Read List</h2>

                        <div className='space-y-6'>
                        {
                            readList.map(book => (
                                <div>
                                    <img className='w-40' src={book.image} alt="" />
                                    <h2>{ book.bookName}</h2>
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
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusantium.</h2>
        </div>
    );
};

export default ListedBooks;