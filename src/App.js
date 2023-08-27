import Cards from './components/Cards';
import Search from './components/Search';
import Pagination from './components/Pagination';
import React, {useState, useEffect} from 'react'
// import Filter from './components/Filter';
import Navbar from './components/Navbar';

function App() {
  const [data,setData] = useState('');
  const [pageNumber,setPageNumber] = useState(1);
  const [header,setHeader] = useState('character');
  const [search,setSearch] = useState('');
  const api = `https://rickandmortyapi.com/api/${header}/?page=${pageNumber}&name=${search}`;
  let info = data.info;
  let results = data.results;

  // if(info)
  // console.log(info);
  // if(results) console.log(results);
  function searchName(name){
    setSearch(name);
  }
  function changePageNumber(page){
    // console.log(page);
    setPageNumber(page);
  }

  function changeHeader(head){
    setHeader(head);
  }
  useEffect(()=>{
    (async function(){
      const data = await fetch(api).then((res)=>res.json());
      setData(data);
      
    })();
  },[api]);
  

  return (
    <div className="App w-[100%] h-[100%]">

      <div className="py-5 text-center w-[100%] bg-[rgba(180,189,230,0.3)] ">
        <h1 className='font-black sm:3xl text-[1.25rem]'>Rick and Morty <span className="text-blue-500">Character</span></h1>
        {/* <Navbar changeHeader={changeHeader} changePageNumber={changePageNumber}></Navbar> */}
      </div>

      

      <div className='bg-[rgb(246,248,255)]'>
        <Search changeName = {searchName} changePage = {changePageNumber}></Search>
        <div className='section'>
          {/* <Filter></Filter> */}
          <Cards data = {results} ></Cards>
        </div>
        <Pagination info = {info} changePage={changePageNumber} pageNumber={pageNumber}></Pagination>
      </div>
    </div>
  );
}

export default App;
