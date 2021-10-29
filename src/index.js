import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { useState } from 'react'; 

/*const arr = ["A", "B", "C"];

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val) =>
    <li>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
<MyList data={arr} />*/

/*function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}
const el= <AddForm />
ReactDOM.render(el,
  document.getElementById('root'));*/


function AddPersonForm(props)
{
 const [name,SetName] = useState("");

 function handleChange(e){ SetName(e.target.value);}
 function handleSubmit(e) {
  if(name !== '') {
    props.handleSubmit(name);
    SetName('');
  }
  e.preventDefault();
}

 return (
 <form onSubmit={handleSubmit}>
  <input type="text" 
  placeholder="Add new contact" 
  onChange={handleChange} 
  value={name} />
  <button type="submit">Add</button>
  </form>
  );



}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
function ContactsList(props)
{
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;

}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm  handleSubmit={addPerson} />
      <ContactsList data={contacts} />
    </div>
  );
} 

const el = (
  <div>
    <AddPersonForm />
    <ContactsList data={contacts} />
  </div>
);
ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
