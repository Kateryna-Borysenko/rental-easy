const Pagination = ({ page, pageSize, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      <button
        className={`mr-2 px-2 py-1 border rounded ${
          page === 1
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Previous
      </button>
      <span className='mx-2'>
        Page {page} of {totalPages}
      </span>
      <button
        className={`ml-2 px-2 py-1 border rounded ${
          page === totalPages
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-white hover:bg-gray-100'
        }`}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
