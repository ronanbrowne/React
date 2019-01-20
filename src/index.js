// import react and react Dom libraries
import React from 'react';
import ReactDOM from 'react-dom'





// Create a react component
const App = () => {
    const buttonText = {text: 'Click me' }
    return (
    <div>
        <label className="lable" htmlFor="name">Enter Name: </label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
        </button>
    </div>
);
}


// Show component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);