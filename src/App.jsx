import {  useState } from 'react';
import './App.css';
import FormInput from './Componets/FormInput';

function App() {
const [values, setValues]=useState({
  username:"",
  email:"",
  birthday:"",
  password:"",
  confirmPassword:"",
})

const inputs =[
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"username",
    label:"username"

  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"email",
    label:"email"

  },
  {
    id:3,
    name:"firstname",
    type:"text",
    placeholder:"firstname",
    label:"firstname"

  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"password",
    label:"password"

  },
  {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"confirmPassword",
    label:"confirmPassword"

  }
]


const handleSubmit = (e) => {
  e.preventDefault();
  
}
const onChange = (e) => {
 setValues({...values,[e.target.name]:e.target.value})
}
console.log(values)
  return (
    <div className='app'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}> 
      {inputs.map((input)=>(
      <FormInput key={input.id}  {...input} value={values[input.name]} onChange={onChange} />
      ))}
        
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
