import React, { Component } from 'react';
import ImageGallery from './client/components/Cristian/ImageGallery';
import Images from './Images';
class ImageCarousel extends Component {
    // const{selectedImage,setSelectedImage} = selectedImage()
    
    render(){
     return (
         <div className='gallery'>
             <div className='container'>
                 <img src={selectedImage} alt='selected' className='selected'/>
                 <div className='img-container'>
                     {ImageGallery.map((img,index) => (
                         <img key={index} src={img} alt='bose' onClick={() => setSelectedImage(img)}/>
                     ))}
                 </div>
 
             </div>
         </div>
     )
 }

    
}

export default ImageCarousel
