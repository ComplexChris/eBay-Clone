import React from 'react';

class Images extends React.Component {
    state = {
        images:['https://images-na.ssl-images-amazon.com/images/I/51ntWa1Q0sL._AC_SX522_.jpg']
      }
        // Initialize state.
      componentDidMount(){
        const product = () => {
          fetch('/product/2')
          .then(response => response.json())
          .then(data => { this.setState (
              {images : image_url}
          )
          })
      };
    }
    render(){
        return (
            <div className='product-image'>
               <img src={this.state.images}/>
            </div>
        )
      }
  };
  export default Images;
 
        