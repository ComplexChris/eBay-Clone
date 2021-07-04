import React, { Component , SetStateAction } from 'react';
import "./styles/styles.css";



class ImageCarousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            images:[],
            selected:0,
            item_id: props.item_id,
            old_image_id: null
        }
    }

    componentDidMount() {
        this.setState({old_image_id: this.props.item_id})
            fetch(`/api/images/${this.props.item_id}`)
            .then((response) => response.json())
            .then((data) => {this.setState(() => (
                {images:data,
                currentItemImage: this.props.callBackImage(data)}
                ))
            })}



    imageGallery(){
        return(
        <div id={this.state.item_id} className='container'>
                <div className='img-container'>
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
    checkForUpdate(){
        // Checks if there is a new item.
        if(this.state.old_image_id !== this.props.item_id) {
            // If so, force re-render of the didMount to fetch new images.
            // After the fetch completes, it'll setState of the new images and re-render.
            this.componentDidMount()
        }
    }



    render() {
        return (
            <div key={this.state.item_id} className='gallery'>
                {this.uponLoadImage()}
                { this.checkForUpdate() }
            </div>

        )
    }
}

export default ImageCarousel

