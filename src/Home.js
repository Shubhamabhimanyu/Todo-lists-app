import React from 'react'
import { useState } from "react";
import uuid from 'react-uuid';



export default function Home(props) {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const show = (e) => {
    e.preventDefault();
    if (input === '') { }
    else {
      setTodos([...todos, { id: uuid(), title: input, completed: false }])
      setInput('');
    }
  }

  const del = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  let updateInput = e => {
    setInput(e.target.value);
  };

  return (
    <div>
      <div className="container">
       

        <div className="mb-3" style={{ width: "100%", display: "inline-flex" }}>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={input} onChange={updateInput} rows="3"
            style={{ backgroundColor: '#0d0d26', color: '#ffffff' }}></textarea>
          <div style={{ marginLeft: '5px' }}>
            <button type="button" className="btn btn-primary my-3" onClick={show}
              style={{ display: "inline-flex", backgroundColor: '#0d0d26' }}> <i style={{ margin: 'auto' }} className="fa fa-plus"></i> Add</button>
          </div>


        </div>




        {todos.map((todo) => (
          <div className="card" style={{ display: 'inline-flex', textAlign: 'justify' }}>
            <ul className="list-group list-group-flush" style={{ width: "18rem", display: 'block' }} onChange={(e) => e.preventDefault()}>
              <li className="list-group-item" key={todo.id} style={{ backgroundColor: " #ccff33" }}>{todo.title}
                <div className="form-check" style={{}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    style={{ width: '0.8em', height: '0.8em', margin: '' }} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">

                  </label>
                </div>

                <button type="button" className="btn btn-primary" onClick={() => del(todo)}
                  style={{ padding: '0px', font: '10px', backgroundColor: ' #ccff33', borderColor: ' #ccff33', color: ' #cc0000' }}>
                  <i className="fa fa-trash"></i></button>


              </li>

            </ul>
          </div>
        )
        )}

      </div>


    </div>
  )
}

