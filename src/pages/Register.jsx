import React from "react";
import Addimg from "../img/addImage.jpg"
const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Hacker Chat</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="display name" />
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Addimg} alt="image" />
                        <span>Add an avatar</span>

                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? <a href="#">Login</a></p>
            </div>
            
        </div>
    );
}
export default Register;