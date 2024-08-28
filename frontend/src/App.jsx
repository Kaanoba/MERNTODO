import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errMessage, setErrMessage] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        const getFetchData = async () => {
            const response = await axios.get('http://localhost:8080/api/todos');
            setTodo(response.data);
        }
        getFetchData();
    }, []);


    const postData = async (e) => {
        e.preventDefault();
        const getData = await axios.post('http://localhost:8080/api/todos', {text});
        setTodo([...todo, getData.data]);
        setText('');
    }

    const deleteTodo = async (id) => {

        await axios.delete(`http://localhost:8080/api/todos/${id}`)
        setTodo(todo.filter(item => item._id !== id))

    }

    const toggleComplete = async (id) => {
        await axios.put(`http://localhost:8080/api/todos/${id}`);
        setTodo(todo.map(todo => todo._id === id ? { ...todo, completed: !todo.completed } : todo));
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-body">
                                <h2 className={'text-center '}>Todo App with MERN Stack</h2>
                            </div>
                            <hr className={'hr'}/>
                            <div className="card-body ">

                                <form className={'card-body d-flex justify-content-center align-items-center gap-3'} onSubmit={postData}>
                                    <input onChange={(e) => setText(e.target.value)}
                                           className={'form-control d-inline-block w-50'} type="text" name="text"
                                           id=""/>
                                    <button type={'submit'} className={'btn btn-primary w-25'}>Save</button>
                                </form>


                            </div>

                            {
                                todo.length > 0 && !loading ?


                                    <div className="card-footer ">
                                        {todo.map((item, index) => (
                                            <ul key={index}
                                                className={'d-flex gap-2 justify-content-center'}>
                                                <li style={{textDecoration: item.completed ? 'line-through' : ''}} className={'mb-2 flex-grow-1 list-group-item'}>
                                                    <h2 href={'#'}
                                                       style={{}}
                                                       className={'text-decoration-none text-black'}> {item.text} </h2>
                                                </li>
                                                <button  onClick={() => {
                                                    deleteTodo(item._id)
                                                }} type={'button'} className={'btn btn-danger'}>Delete
                                                </button>
                                                <button onClick={() => {
                                                    toggleComplete(item._id)
                                                }} type={'button'} className={'btn btn-success'}>Completed
                                                </button>
                                            </ul>
                                        ))}


                                    </div>

                                    :
                                         <div className="card-footer p-5">
                                            <h2 className={'text-center'}>Add a Todo</h2>
                                        </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default App;