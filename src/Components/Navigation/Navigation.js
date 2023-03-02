import React from 'react';


const Navigation = ({onRouteChange}) => {

    return (
        // not justify-content in JS because REACT replaces - with camelCase
        //display: flex means the frog thing 
        // justifyContent is horixontal, alignItems:is vertical
        <nav style = {{display: "flex", justifyContent: "flex-end"}}>
            
        {/* Use the tachyons lib for super easy css as shown below: */}
        {/*When clicked signout button, set route to signin, so you can get just the signin component*/}
        <p onClick= { () => onRouteChange("signin")} className= "f3 link dim black underline pa3 pointer"> Sign out </p>   
        </nav>
    );
}

 export default Navigation; 

