import React from 'react'

const Navbar = (props) => {
    const character = document.getElementById('Char');
    const episode = document.getElementById('Epi');
    const location = document.getElementById('Loc');
    const changeHandle = (e) => {
        character.classList.remove('click');
        episode.classList.remove('click');
        location.classList.remove('click');
        if(e.target.textContent === 'Characters'){
            character.classList.add('click');
            props.changeHeader('character');
            props.changePageNumber(1);
        }
        else if(e.target.textContent === 'Episode'){
            episode.classList.add('click');
            props.changeHeader('episode');
            props.changePageNumber(1);
        }
        else if(e.target.textContent === 'Location'){
            location.classList.add('click');
            props.changeHeader('location');
            props.changePageNumber(1);
        }
    }
  return (
    <div className='flex justify-evenly gap-5'>
        <p id='Char' className='click cursor-pointer' onClick={changeHandle}>Characters</p>
        <p id='Epi' className='cursor-pointer' onClick={changeHandle}>Episode</p>
        <p id='Loc' className='cursor-pointer' onClick={changeHandle}>Location</p>
    </div>
  )
}

export default Navbar