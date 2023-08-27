import React from 'react'
const Search = (props) => {
    // console.log('Search');  
    function changeSearch(e){
        props.changePage(1);
        e.preventDefault();
        props.changeName(e.target.value);
    }
  return (
        <form className='flex justify-center sm:gap-2 gap-2 py-4'>
            <input type='text' placeholder='Search for Character...' onChange={changeSearch} className='w-[80%] sm:w-[60%] md:w-[40%] text-xl shadow-xl focus:outline-none py-1 sm:px-3 px-1 rounded-md'></input>
            <button className=' text-red sm:text-xl bg-white sm:px-2 px-1 rounded-full text-center shadow-xl' onClick={(e)=>e.preventDefault()}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
  )
}

export default Search;