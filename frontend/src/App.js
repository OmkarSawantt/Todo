import { useEffect, useState } from 'react';
import Input from './components/Input';
import { createTodo, getAllTodo } from './actions/TodoAction';
import Todo from './components/Todo';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  const fetchTodo = () => {
    getAllTodo().then((res) => {
      setItems(res.data);
    });
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  function handleChange(event) {
    if (event.target.name === 'title') {
      setTitle(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  }

  function handleClick() {
    const body = {
      title: title,
      description: description,
    };
    createTodo(body)
      .then((res) => {
        console.log('response:', res);
        fetchTodo();
        setTitle('');
        setDescription('');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex w-full h-full flex-col items-center">
      <div className="m-8 flex flex-col gap-4 lg:w-1/2 w-full px-2 lg:px-0">
        <Input label={'Title'} handleChange={handleChange} value={title} />
        <Input label={'Description'} handleChange={handleChange} value={description} />
        <div className='w-full flex items-center justify-center'>
          <button type="submit" onClick={handleClick}  className="relative w-1/2 lg:w-1/4 overflow-hidden rounded-lg h-12 group hover:animate-pulse hover:shadow-lg hover:scale-105 transition duration-500 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-[#eb5e28] before:via-[#eb5e28] before:to-[#eb5e28]"  >
            <span className="relative text-white font-black text-xl px-8 py-8">Submit</span>
          </button>
        </div>
      </div>
      <div className='w-full lg:w-2/3 flex my-8 flex-col items-center justify-center gap-4'>
        {items.map((item, index) => (
          <div key={index} className='w-full border-b-2 border-orange-500'>
            <Todo item={item} fetchTodo={fetchTodo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
