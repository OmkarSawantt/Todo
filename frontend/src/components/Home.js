import { useEffect, useState } from "react";
import { createTodo, delTodo, getAllTodo, updateTodo } from "../actions/TodoAction";

const Home = () => {
  const [data, setData] = useState({
    title: '',
    description: '',
    id: ''
  });
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    fetchTodo();
  }, []);

  const handelSubmit = () => {
    const body = {
      title: data.title,
      description: data.description
    };
    createTodo(body).then((res) => {
      console.log('response:', res);
      fetchTodo(); // Fetch updated todos after creating a new one
    }).catch((err) => {
      console.log(err);
    });
  };

  const handelChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const fetchTodo = () => {
    getAllTodo().then((res) => {
      setAllTodo(res.data);
    });
  };

  const handelValue = (elem) => {
    setData({
      title: elem.title,
      description: elem.description,
      id: elem._id
    });
  };

  const handelUpdate = async () => {
    const body = {
      title: data.title,
      description: data.description
    };
    const res = await updateTodo(data.id, body);
    console.log('res', res);
    fetchTodo();
  };
  const handelDelete=async(ele)=>{
    const res=await delTodo(ele._id);
    console.log('res', res);
    fetchTodo();
  }

  return (
    <div>
      <label>Title</label>
      <input 
        type='text' 
        name="title" 
        placeholder='title' 
        onChange={handelChange} 
        value={data.title} 
      />
      <br />
      <label>Description</label>
      <input 
        type='text' 
        name="description" 
        placeholder='description' 
        onChange={handelChange} 
        value={data.description} 
      />
      <br />
      <button onClick={handelSubmit}>Submit</button>
      <button onClick={handelUpdate}>Update</button>
      <br />
      <ul>
        {
          allTodo.map((ele) => (
            <li key={ele._id}>
              <p>Title: {ele.title}</p>
              <p>Description: {ele.description}</p>
              <button onClick={() => handelValue(ele)}>Update</button> 
              <button onClick={() => handelDelete(ele)}>Delete</button> 

            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Home;
