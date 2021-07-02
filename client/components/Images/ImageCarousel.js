import React, { Component , SetStateAction } from 'react';
import "./styles/styles.css";



class ImageCarousel extends Component {
    state = {
        images:[]
    }

    fetch('/:id')
        
        
    render() {
       
        return (
            <div className='gallery'>
                <div className='container'>
                    <div className='img-container'>
                        {this.state.images.map((index) => (
                            <img 
                            style={{border: this.state.images === index ? '4px solid black ': ''}}
                            key={index} 
                            src={index} 
                            alt='main-image' 
                            onClick={() => this.setState.images[index]}/>
                        ))}
                    </div>
                    <img src={this.state.images[0]} alt='selected' className='selected'/>
    
                </div>
            </div>
        )
    }
}

export default ImageCarousel

