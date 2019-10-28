import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hooks from './Hooks/Hooks'

function App() {
  return (
    <div className="App">
     <Hooks />
    </div>
  );
}

export default App;

/* We are no longer declaring a single object called state that holds our component’s state. Instead, we are now splitting up state into multiple declarations. */

/* 
But with useState, we initialize two variables called firstName and setFirstName. We then set their values to whatever useState() returns.
*/

/* 
Well, since this is a functional component, we don’t have setState to help us modify the value of the state variable. What we do have is setFirstName whose sole purpose is to update firstName every time we call it.

So when you see:

const [firstName, setFirstName] = useState("")
*/

/* 
The empty string in the useState call is the initial value of firstName and can be set to any required value.
*/

/* 
Note that you can name the setFirstName function whatever you want. It is a convention, however, to append ‘set’ before the name of the state variable we’re modifying.
*/

/* 
In our first input tag, we set it’s value to the state variable we declared at the top of our component. As for the onChange handler, we set it to an arrow function that calls the function which updates our state variable for us.

Where we had a method in our previous class component called handleInputChange, we now have an anonymous function that updates our state for us.
*/

