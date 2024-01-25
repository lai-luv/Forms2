import { useRef, useState } from 'react';
import './App.css';
import FormInput from './Componets/FormInput';

function App() {
// const [userName, setUserName]=useState('')
const userNameRef=useRef()

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(userNameRef)
}

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}> 
        <FormInput refer={userNameRef} placeholder="username"  />
        <FormInput placeholder="Email"/>
        <FormInput placeholder="FirstName "/>
        <FormInput placeholder="LastName" />
        <FormInput placeholder="age" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
