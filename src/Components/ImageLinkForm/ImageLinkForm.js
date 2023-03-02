import React from 'react';

import "./ImageLinkForm.css"

/* REALLY IMPORTANT: 
IN REACT, you need to encapsulate everything in one parent tag!!!
That's why you cannot have 2 divs seperately, you need to wrap everything in one parent div
*/
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {

    return (
        <div>
            <p className="f3">
                {"This website is capable of detecting faces in your pictures"}
            </p>
        
            <div className="center">
                <div className=" form center pa4 br3 shadow-5 w-30">
                    {/* The onChange className checks for changes in the input and when something changes we 
                    call the onInputChange Function and pass in the changed input as its parameter*/}
                    <input className="f4 pa2 w-70 center" type="tex" onChange= {onInputChange} />
                    {/*OnChange is for detecting input change, onCLick is for detecting button changes*/}
                    <button className= "w-30 grow f4 link ph3 pv2 dib white bg-light-purple" onClick = {onButtonSubmit}>Detect </button>
                </div>  
            </div>

        </div>

    );
}

 export default ImageLinkForm; 

