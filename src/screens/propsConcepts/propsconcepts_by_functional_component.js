import React from "react";

//----------------------------------------------------------------------------------//
/*function PropsConcept(props)
{
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h1>I am a {props.designation}</h1>

        </div>
        );
}*/
//----------------------------------------------------------------------------------//
/*function PropsConcept({name,designation})
{
    return(
        <div>
            <h1>My name is {name}</h1>
            <h1>I am a {designation}</h1>

        </div>
        );
}*/

//----------------------------------------------------------------------------------//
/*const PropsConcept=(props)=>{
    const{name,designation}=props||{};
    return(
        <div>
            <h1>My name is {name}</h1>
            <h1>I am a {designation}</h1>
        </div>
    ); 

};*/
//----------------------------------------------------------------------------------//
const PropsConcept=({name,designation})=>{
    return(
        <div>
            <h1>My name is {name}</h1>
            <h1>I am a {designation}</h1>
        </div>
    );
};
//----------------------------------------------------------------------------------//
/*const PropsConcept=function(props)
{
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <h1>I am a {props.designation}</h1>
        </div>
    );
}*/
//----------------------------------------------------------------------------------//
/*const PropsConcept=function({name,designation})
{
    return(
        <div>
            <h1>My name is {name}</h1>
            <h1>I am a {designation}</h1>
        </div>
    );
}*/

export default PropsConcept