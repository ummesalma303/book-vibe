
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId,bookName,author,image,category,tags,rating} = book;
    return (
        <Link to={`/bookDetail/${bookId}`}>
             <div className='font-workSans font-medium text-base'>
          <div>
            
            </div><div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={bookName}
          className="rounded-xl h-60 w-56" />
      </figure>
                <div className="card-body ">
                    <div className='flex space-x-5'>
                    {
                        tags.map((tag,i) => <button key={i} className=' bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-lg'>{ tag}</button>)
                    }
                   </div>
                    <h2 className="card-title font-playFair text-2xl font-bold text-[#131313CC]">{ bookName}</h2>
                    <p>By: {author}</p>
                    <div className=" border-2 border-dashed"></div>
                    <div className='flex justify-between'>
                        <button className="">{category}</button>
                        <div className='flex items-center'>
                            <p>{rating}</p>
                            <div className="rating w-4"><input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" /></div>
                       </div>
        </div>
      </div>
    </div>
        </div>
        </Link>
    );
};

Book.propTypes = {
    book:PropTypes.object.isRequired
};

export default Book;;