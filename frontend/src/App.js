import { useState } from 'react';
import './App.css';
import Input from './components/Input'

function App() {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [items, setItems] = useState([]);

  function handelChange(event){
    if(event.target.name==="title"){
      setTitle(event.target.value)
    }
    else{
      setDescription(event.target.value)
    }
  }
  function handelClick(){
    setItems([...items, { title, description }]);
    setTitle('')
    setDescription('')
  }
  return (
    <div className="App">
      <Input label={'title'} handelChange={handelChange} value={title}  ></Input>
      <Input label={'Description'} handelChange={handelChange} value={description}></Input>
      <button type='submit' onClick={handelClick}>Submit</button>
      <ol>

        {
          items.map((item, index) => (
            <li>
            <ul>
            <li key={index}>Title: {item.title}</li>
            <li> Description: {item.description}</li>
            </ul>
            </li>
          ))
        }
      </ol>
    </div>
  );
}
export default App;
