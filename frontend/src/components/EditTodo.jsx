import React from 'react';
import axios from "axios";

const EditTodo = (props) => {



    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-title">
                                <h2>Update Todo id: {  }</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={updateTodo}>

                                    <input type="text" name="text" value={} id=""/>
                                    <button className={'btn btn-primary'} type={'submit'}>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;