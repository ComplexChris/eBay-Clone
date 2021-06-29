import React, { Component , SetStateAction } from 'react';
import "./styles/styles.css";



class ImageCarousel extends Component {
    state = {
        images:['https://images-na.ssl-images-amazon.com/images/I/51ntWa1Q0sL._AC_SX522_.jpg',
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MY582?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1604515400000',
        'https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026540&id=1451408&recipeId=728',
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425563_rd.jpg',
        'https://i.pcmag.com/imagery/reviews/023MVhj10aIJhjqe0Sbn8Dt-1..1569469921.png',
        'https://static.bhphoto.com/images/images1500x1500/1484050840_1308819.jpg']
    }
        
        
    render() {
       
        return (
            <div className='gallery'>
                <div className='container'>
                    <img src={this.state.images[0]} alt='selected' className='selected'/>
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
    
                </div>
            </div>
        )
    }
}

export default ImageCarousel

