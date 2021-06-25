import React from 'react';

class Images extends React.Component {
    state = {
        images:[]
    }
        product = () => {
        fetch('/product/1')
        .then(response => response.json())
        .then((data) => { this.setState (
            {images : data[0].image_url}
        )
        })
    };
    

      render(){
          return (
              <div className='product-image'>
                 <img images={this.state.images}/>
              </div>

          )

      }
 };
    
        

export default Images;