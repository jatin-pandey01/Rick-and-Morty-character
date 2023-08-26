import React from "react";
import Status from "./Status";
import Species from "./Species";
import Gender from "./Gender";

function Filter(){
    const filter = [{id:1, name:'Status', ans:{btn1:'Alive',btn2:'Dead',btn3:'Unknown'}},
                    {id:2, name:'Species', ans:{btn1:'Human',btn2:'Alien',btn3:'Humanoid',btn4:'Poopybutthole',btn5:'Mythology',btn6:'Unknown',btn7:'Animal',btn8:'Disease',btn9:'Robot',btn10:'Cronenberg',btn11:'Planet'}},
                    {id:3, name:'Gender', ans:{btn1:'Female',btn2:'Male',btn3:'Genderless',btn4:'Unknown'}}];

    return(
        <div className="filter">
            <h1 className="font-black text-2xl">Filters</h1>
            <p className="text-center underline text-blue-500 capitalize cursor-pointer mt-1">clear filters</p>
            <div>
                <Status></Status>
                <Species></Species>
                <Gender></Gender>
                
            </div>
        </div>
    );
}   

export default Filter;