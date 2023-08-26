

function Card(props){
    const data = props.result;
    // console.log(data);
    return(
        <div className="card relative">
            <img src={data.image} alt="Image" className="image"></img>
            {(function(){
                    if(`${data.status}` === 'Alive'){
                        return <p className="bg-[green] text-white mx-1 rounded-md px-2 h-[max-content] absolute right-3 top-4">{data.status} </p> 
                    }
                    else if(`${data.status}` === 'Dead'){
                        return <p className="bg-[red] text-white mx-1 rounded-md px-2 h-[max-content] absolute right-3 top-4">{data.status} </p> 
                    }
                    else{
                        return <p className="bg-[rgb(108,117,125)] text-white mx-1 rounded-md px-2 h-[max-content] absolute right-3 top-4">{data.status} </p> 
                    }
            })()
            }  

            <div className="flex justify-between my-2">
                <p className="font-bold text-xl">{data.name}</p>
            </div>

            <div className="mt-1">
                <p>Last Location</p>
                <p className="text-[1.25rem]">{data?.location?.name} </p>
            </div>
        </div>
    );
}
export default Card;
