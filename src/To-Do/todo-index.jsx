import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Link} from "react-router-dom";
import './todo-index.css';
import { ToDoHome } from "./todo-home";
import { ToDoLogin } from "./ToDo-login";
import { ToDoRegister } from "./ToDo-register";
export function ToDoIndex() {

    return(
        <div className="bg-image">

       <BrowserRouter>
       <header className=" p-2 text-center text-dark ">
            <h1 className="mt-4"><Link to="/" className='btn btn-light w-50'>TO-DO APP</Link>  </h1>
        </header>
        <section>
            <Routes>
                <Route path='/' element={<ToDoHome/>}/>
                <Route path='login' element={<ToDoLogin/>} />
                <Route path='register' element={<ToDoRegister/>} />
            </Routes>
        </section>
       </BrowserRouter>

        </div>
    )
}