import { ENDPOINT_URL } from "../constants/constant";

export const createTodo=(todo)=>{
    return fetch(`${ENDPOINT_URL}/createTodo`,{
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(todo)
    }).then((res)=>{
        return res.json()
    }).catch(err=>{
        console.log(err);
    })
}

export const getAllTodo=()=>{
    return fetch(`${ENDPOINT_URL}/getAllTodo`,{
        method:'GET',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json'
        },
    }).then((res)=>{
        return res.json()
    }).catch(err=>{
        console.log(err);
    })
}

export const updateTodo=(id,body)=>{
    return fetch(`${ENDPOINT_URL}/updTodo/${id}`,{
        method:'PATCH',
        headers:{
            Accept:'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(body)
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        return err
    })
}
export const delTodo=(id)=>{
    return fetch(`${ENDPOINT_URL}/delTodo/${id}`,{
        method:'DELETE',
        headers:{
             Accept:'application/json',
            'Content-type':'application/json'
        },
    }).then((res)=>{
        return res.json()
    }).catch((err)=>{
        return err
    })
}