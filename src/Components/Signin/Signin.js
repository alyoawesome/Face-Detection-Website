import React from 'react';


// INPUT TAGS NEEDS TO BE CLOSED IN REACT/JSX

const  Signin = ({onRouteChange}) => {

    return (
        <article className=" br3 shadow-5 ba dark-gray mw8 center">
       <main className= "sans-serif w-30 center relative  mt2" >


      <div className="relative pa4 pa5-m">
        <h1 className="f1 serif tracked ma0 mb4 pv3">Sign In</h1>
        <form action="" id="login" className="">
          <div className="mb3">
            <label for="username" className="db f6 white-80 ttu ph2 mb2">Email</label>
            <input type="text" name="username" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"/>
          </div>
          <div className="mb4">
            <label for="password" className="db f6 white-80 ttu ph2 mb2">Password</label>
            {/*INPUT TAGS NEEDS TO BE CLOSED IN REACT/JSX*/}
            <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill"/>
          </div>
          <div>
              {/*When clicked signin button, set route to home, so you can get the other components */}
            <button onClick= { ()=>onRouteChange("home")} className="input-reset db w-100 light-gray f6 b ttu tracked pv3 ph3 pointer bg-dark-blue hover-bg-blue bn br-pill">Sign In</button>
          </div>
        </form>
        
        <div className="tc b f6 mt4 o-70 glow pa2 i">
          New Member? <a className="white" href="#">Register</a>
        </div>

    </div>
    

    </main>
        </article>
        

    );
}

 export default Signin;  

