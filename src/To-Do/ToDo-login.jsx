import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function ToDoLogin() {
    const [credentials, setCredentials] = useState({ userid: "", password: "" });
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }

    function handleLogin(e) {
        e.preventDefault();
        axios.get("http://127.0.0.1:4000/users")
            .then((response) => {
                const user = response.data.find(
                    (u) => u.userid === credentials.userid && u.password === credentials.password
                );
                if (user) {
                    toast.success("Login Successful!");
                    navigate("/");
                } else {
                    toast.error("Invalid Credentials! Please register.");
                    navigate("/register");
                }
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                toast.error("Something went wrong. Please try again later.");
            });
    }

    return (
        <div className="container p-4 w-50 bg-light">
            <h3>User Login</h3>
            <form onSubmit={handleLogin}>
                <dl>
                    <dt>User Id</dt>
                    <dd>
                        <input
                            type="text"
                            className="form-control"
                            name="userid"
                            value={credentials.userid}
                            onChange={handleChange}
                        />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </dd>
                </dl>
                <button type="submit" className="btn btn-warning">
                    Login
                </button>
                <p className="mt-4">
                    New User? <Link to="/register">Register</Link>
                </p>
            </form>
        </div>
    );
}