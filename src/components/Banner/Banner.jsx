import bookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen my-4 px-3">
  <div className="hero-content flex-col lg:flex-row-reverse items-center ">
    <img
      src={bookImage}
      className="rounded-lg shadow-2xl" />
    <div className='p-5'>
      <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-success text-white mt-8">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;