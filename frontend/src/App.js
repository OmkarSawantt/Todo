import './App.css';
import Input from './components/Input'
function App() {
  const arr=["Title","Description"]
  const ele= arr.map((label)=><Input label={label}></Input>)
  
  return (
    <div className="App">
      {ele}
    </div>
  );
}
export default App;
