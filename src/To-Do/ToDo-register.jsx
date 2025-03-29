import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as yup from "yup";

export function ToDoRegister() {
  const navigate = useNavigate();

  // Validation schema using Yup
  const validationSchema = yup.object({
    userid: yup
      .string()
      .required("User ID is required")
      .min(4, "User ID must be at least 4 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .matches(
        /(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      )
      .matches(
        /(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      )
      .matches(
        /(?=.*[!@#$%^&*])/,
        "Password must contain at least one special character"
      ),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      userid: "",
      password: "",
      email: "",
    },
    validationSchema,
    onSubmit: async (user) => {
      try {
        const { data: users } = await axios.get("http://127.0.0.1:4000/users");

        const existingUserid = users.find((u) => u.userid === user.userid);
        const existingEmail = users.find((u) => u.email === user.email);

        if (existingUserid) {
          toast.error("User ID already exists! Please choose a different one.");
          return;
        }

        if (existingEmail) {
          toast.error("Email already exists! Please choose a different one.");
          return;
        }

        // If no conflicts, register the user
        await axios.post("http://127.0.0.1:4000/users", user);
        toast.success("Registered Successfully!");
        navigate("/login");
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    },
  });

  return (
    <div className="container p-4 w-50 bg-light">
      <h3>Register User</h3>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User ID</dt>
          <dd>
            <input
              type="text"
              name="userid"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userid}
            />
            {formik.touched.userid && formik.errors.userid && (
              <span className="text-danger">{formik.errors.userid}</span>
            )}
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-danger">{formik.errors.password}</span>
            )}
          </dd>
          <dt>Email</dt>
          <dd>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-danger">{formik.errors.email}</span>
            )}
          </dd>
        </dl>
        <button type="submit" className="btn btn-warning">
          Register
        </button>
        <p className="mt-4">
          Existing User? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
