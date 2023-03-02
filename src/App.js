import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import './App.css';
import "tachyons";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Clarfai from "clarifai";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Signin from "./Components/Signin/Signin";

import ParticlesBg from 'particles-bg'


class App extends Component {
  
  
  // needs to be a CLASS app for constructor to work
  constructor() {
    super();
    // States saves the current state of aspects of the application and then continously update them when needed
    this.state = {
      // to track input updates
      input: " ",
      // to track imageUrl updates
      imageUrl: " ",
       // to track the bounding box updates from the Clarifai API
      box: {},
      
      route: "signin"
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }



  // This function is called in ImageLinkForm.js when the input changes and this function will log that change
  onInputChange = (event) => {
    console.log(event.target.value); 

    // You're setting the input value from state to the input value from the website's bar 
    this.setState({input: event.target.value})
  }


  onButtonSubmit = () => {
    console.log("click")
    //When button is clicked the imageURL becomes the state's input, which is the inputted url on the website
    //The image is then displayed below thanks to the faceRecognition component using the ImageURL as a parameter and using src = ImageURL
    this.setState({imageUrl: this.state.input});

    // when button is clicked send this.state.input (the inputted URL on the website) to API 
  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": "clarifai",
      "app_id": "main"
    },
    "inputs": [
        {
            "data": {
                "image": {
                  // 
                    "url": this.state.input
                }
            }
        }
    ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + '1ecc261a5c3b40cfbe9999f300cee1a7'
      },
      body: raw
  };


  fetch(`https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`, requestOptions)

     

     
  
      .then(response =>response.json())
      .then(result => console.log(result))
//      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))

      .catch(error => console.log('error', error));
    
      
  }

  onRouteChange = (newRoute) => {
    this.setState({route: newRoute});

  }



  render() {
    return (
      <div className="App">
               <ParticlesBg type="cobweb" bg={true} color="#FFFFFF" />
       
        <Navigation onRouteChange = {this.onRouteChange}/>
        
        {/*if the current route is signin, then just show the signin component, otherwise show all the other components*/}
        {this.state.route === "signin"
        ? <Signin onRouteChange= {this.onRouteChange}/>
        : <div>
        {/* Remeber that the else statement is returning a bunch of components, but React can only return one thing, so pu them all in one div */}
        <Logo />
        <Rank />
        {/* This component has the paraamter onInputChange, which is this app's onInputChange */}
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit= {this.onButtonSubmit} />
        < FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl /*it's within state so it's this.state*/}/>
        </div>
        }
      </div>
    );
  }
}

export default App;