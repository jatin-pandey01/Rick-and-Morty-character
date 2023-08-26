import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
    // let pageSize = parseInt(props.info?.pages);
    // console.log(typeof props.info?.pages);
  return (
    <ReactPaginate className='flex py-5 gap-5 border-black justify-center text-blue-600' 
        nextLabel='Next'
        previousLabel='Prev'
        nextClassName='bg-blue-600 text-white px-2 rounded flex items-center'
        previousClassName='bg-blue-600 text-white px-2 rounded flex items-center'
        pageClassName='border-[rgba(0,0,0,0.1)] border-solid border-2 bg-white px-2 py-1'
        pageLinkClassName='border-red-800 border-solid'
        onPageChange={(data)=>{
            // console.log(data.selected);
            props.changePage(data.selected + 1);
        }}
        activeClassName='bg-blue-400 text-black border-[rgba(255,0,0,0.4)] decoration-solid'
        forcePage={props.pageNumber === 1 ? 0 : props.pageNumber-1} 
        // breakLabel='...'
        pageCount={props.info?.pages}
    />
  );
}

export default Pagination;