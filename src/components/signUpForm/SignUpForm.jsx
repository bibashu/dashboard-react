import { useState } from "react";
import s from "./style.module.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// Pour le login on utilisera // signInWithEmailAndPassword 
export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Email created");
    } catch (error) {
      console.error("Error creating email:", error);
    }
  };

  return (
    <div className={`container ${s.container}`}>
      <div className={`container ${s.main_wrapper}`}>
        <div className={`fw-bold text-center ${s.title_wrapper}`}>
          CRUD OPERATIONS
        </div>
        <div className="form-container">
          <h3 className={`text-center ${s.title}`}>SIGN IN</h3>
          <h6 className="text-center">
            Enter your data to access your account
          </h6>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={`col-12 ${s.buttonForm}`}>
              Submit
            </button>
            <p className="text-center mt-4 fs-6">
              Forgot your password?{" "}
              <span>
                <a
                  href="#"
                  style={{ color: "#FEAF00", textDecoration: "none" }}
                >
                  Reset Password
                </a>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
