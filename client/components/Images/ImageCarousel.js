import React, { Component , SetStateAction } from 'react';
import "./styles/styles.css";



class ImageCarousel extends Component {
    constructor(){
        super()
        this.state = {
            images:[],
            selected:0
        }
    }
    
    componentDidMount() {
            fetch(`/api/images/${this.props.item_id}`)
            .then((response) => response.json())
            .then((data) => {this.setState(() => (
                {images:data}
                ))
            })}

            imageGallery(){
                return(
                <div className={'container'}>
                        <div className={'img-container'}>
                            {this.state.images.map((imgObj,index) => (
                            <img 
                            style={{border: this.state.images === imgObj ? '4px solid black ': ''}}
                            key={imgObj.id} 
                            src={imgObj.image_url} 
                            alt='main-image'
                            id={index}
                            onMouseEnter={this.upDateSelectedImage.bind(this)}/>
                            ))}
                        </div>
                    <img src={this.state.images[this.state.selected].image_url} alt='selected' className='selectedImg'/>
                </div>

            )
        }
            
        upDateSelectedImage(e){
           //callback for when a user clicks on this galleryImage
           //upon selecting an image from gallery it will update state of main image 
           //e is event for Onclick attribute for the selectedimage on imageGallery
           this.setState({selected:e.target.id})
     }
          
               
                
        uponLoadImage(){
            if(this.state.images.length === 0){
                return <div/>
                }else{
                    return (
                        this.imageGallery()
                    )
                }
            }
        
        
        
        render() {
            return (
                <div className='gallery'>
                    {this.uponLoadImage()}
                </div>
                    
                     
                    

        )
    }
}

export default ImageCarousel

