// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

const [title , setTitle] = useState('');
const [details , setDeatils]= useState('');
const [dueDate,SetDuedate ]= useState('')
const [Array ,setArry ]= useState([]);

const add=()=>{
  //  let id = Array.length;
  setArry([...Array,{ title: title,detail: details,dueDate: dueDate}])
  // console.log(Array);
  setTitle('');
  setDeatils('');
  SetDuedate('');
}
const deleteitem =(id)=>{

   setArry(Array.filter(item => item.id !== id));
    console.log(Array);
}
const handleSubmit=(event)=>{
  event.preventDefault();
}
  return (
    <div className="App">
      <div className="Forms" onSubmit={handleSubmit} >
     <form>
         <h1>TO-DO App</h1>

      <label> Title :
        <input type="text" value ={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    </label>

     <label className='details'> details:
       <input type='text' value={details} onChange={(e)=>{setDeatils(e.target.value)}}/>
     </label>

     <label > Due date
         <input   type='date' value={dueDate} onChange={(e)=>SetDuedate(e.target.value)} />
     </label>

       <button onClick={add}  type='submit'>Submit</button>
   </form>
      

      <div>
        <ul>
        
          {Array.map((val,ind)=>{
              return (
                <div>
                  <p><h3>{val.title} <button onClick={()=>deleteitem(ind)} className='btn-delete' type='submit'>X</button></h3>
                     {val.detail}
                     <br></br>
                     {val.dueDate}
                  </p>

                </div>
              )
          })}
          
        </ul>
      </div>
      </div>

      
    </div>
  );
}

export default App;
