import React, { Component } from "react";
import Images from './Display Items/Images';
import ImageCarousel from './Display Items/ImageCarousel'


class App extends Component {
 
    
    
    render() {
      return <div className='App'>  
              <Images images={this.props.images}/>
              <ImageCarousel images={this.props.Carousel()}/>
          </div>
          
          
        }
      }
    

export default App;
