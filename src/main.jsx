import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import BookDetails from './components/bookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/listedBooks',
        element:<ListedBooks></ListedBooks>
      },
      {
        path: '/bookDetail/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ()=>fetch('/data/booksData.json')
      },
      {
        path: '/dashBoard',
        element:<DashBoard></DashBoard>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
