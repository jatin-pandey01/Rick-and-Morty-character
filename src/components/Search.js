import React from 'react'
const Search = (props) => {
    // console.log('Search');  
    function changeSearch(e){
        props.changePage(1);
        e.preventDefault();
        props.changeName(e.target.value);
    }
  return (
        <form className='flex justify-center gap-2 py-4'>
            <input type='text' placeholder='Search for Character...' onChange={changeSearch} className='w-[40%] text-xl shadow-xl focus:outline-none py-1 px-3 rounded-md'></input>
            <button className=' text-red text-xl bg-white px-2 rounded-2xl shadow-xl' onClick={(e)=>e.preventDefault()}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
  )
}

export default Search;