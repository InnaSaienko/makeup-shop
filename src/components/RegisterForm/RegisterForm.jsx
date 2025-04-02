import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.scss";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

function RegisterForm() {
    const navigate = useNavigate();
    const { userSignUp } = useAuthorization();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        phone : "",
        email: "",
        password : "",
        repeat_password: "",
        isLogin: false,
    });
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (user.password !== user.repeat_password) {
            alert("Passwords do not match!");
            return;
        }
        userSignUp(user);
        navigate(`/`);
    };
    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    return (
        <form className="form" autoComplete="off" method="post" onSubmit={handleSubmit}>
            <h2 className="form__title">Registration of a new user</h2>
            <div>
                <div className="input-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" className="first_name" placeholder="First name" name="firstName" value={user.firstName} onChange={handleChange}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="surname"></label>
                    <input type="text" id="surname" className="last_name" placeholder="Last name" name="lastName" value={user.lastName} onChange={handleChange}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="birthday"></label>
                    <input type="text" id="birthday" className="birthday_date" placeholder="Date of birthday" name="birthday" value={user.birthday} onChange={handleChange}/>
                    <span className="bar"></span>
                </div>
            </div>
            <div>
                <div className="input-group">
                    <label htmlFor="phone"></label>
                    <input id="phone" type="tel" maxLength="20" required  className="phone" inputMode="text" placeholder="Phone*" name="phone" value={user.phone} onChange={handleChange}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="mail" className="form__label"></label>
                    <input type="email" id="mail" className="form__input" required placeholder="E-mail*" name="email" value={user.email} onChange={handleChange}/>
                    <span className="bar"></span>
                </div>
            </div>
            <div>
                <div className="input-group">
                    <label htmlFor="password"></label>
                    <input id="password" type="password" autoComplete="off" required className="input" placeholder="Password*" name="password" value={user.password} onChange={handleChange}/>
                    <div className="password-show-button"></div>                    
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="repeat-password"></label>
                    <input id="repeat-password" type="password" autoComplete="off" required className="input" placeholder="Repeat password*" name="repeat_password" value={user.repeat_password} onChange={handleChange}/>
                    <div className="password-show-button"></div>                    
                    <span className="bar"></span>
                </div>
                <button type="submit" className="button">Sign up</button>
            </div>
        </form>
    );
}

export default RegisterForm;
