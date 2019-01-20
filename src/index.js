// import react and react Dom libraries
import React from 'react';
import ReactDOM from 'react-dom'



// Create a react component
const App = () => {
    return <div>Hi There</div>;
}


// Show component on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')

);