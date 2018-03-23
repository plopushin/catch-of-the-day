import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  
  goToStore = event => {
    //stop the form from submitting
    event.preventDefault();
    //2.get the text from input
    const storeName = this.myInput.value.value;
    //3. change page to store/x
    this.props.history.push(`/store/${storeName}`);
  };

  render(){
    return (
      
     <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please enter a store</h2>
      <input type="text" ref={this.myInput} required placeholder ="Enter Store Name" defaultValue={getFunName()} />
      <button type="submit">Visit Store</button>
    </form>
    
    )
  }

}

export default StorePicker;

//{} means javascript in jsx