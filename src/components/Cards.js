import React from 'react'
import Card from './Card';
const Cards = (props) => {
    const results = props.data;
    if(results){
        return(
            <div className='cards'>
                {
                    results.map((card)=>{
                        return <Card result={card} key={card.id}></Card>
                    })
                }
            </div>
        );
    }
    else{
        let notFound = `No characters Found :) `;
        return(<div className='flex justify-center py-4 items-center w-[100%]'>{notFound}</div>);
    }
}

export default Cards;