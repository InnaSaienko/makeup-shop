import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RegisterForm.scss";
import { useAuthorization } from "../../context/AuthorizationContext/AuthorizationContext";

function RegisterForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { userSignUp } = useAuthorization();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            firstName,
            lastName,
            birthday,
            phone,
            email,
            password,
            isLogin: true
        };
        userSignUp(userData);
        navigate(`/`);

    };

    return (
        <form className="form" autoComplete="off" method="post" onSubmit={handleSubmit}>
            <h2 className="form__title">Registration of a new user</h2>
            <div>
                <div className="input-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" className="first_name" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="surname"></label>
                    <input type="text" id="surname" className="last_name" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="birthday"></label>
                    <input type="text" id="birthday" className="birthday_date" placeholder="Date of birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
                    <span className="bar"></span>
                </div>
            </div>
            <div>
                <div className="input-group">
                    <label htmlFor="phone"></label>
                    <input id="phone" type="tel" name="phone" maxLength="20" required  className="phone" inputMode="text" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="mail" className="form__label"></label>
                    <input type="email" id="mail" className="form__input" required placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <span className="bar"></span>
                </div>
            </div>
            <div>
                <div className="input-group">
                    <label htmlFor="password"></label>
                    <input id="password" type="password" name="cust_password1" autoComplete="off" required className="input" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="password-show-button"></div>                    
                    <span className="bar"></span>
                </div>
                <div className="input-group">
                    <label htmlFor="repeat-password"></label>
                    <input id="repeat-password" type="password" autoComplete="off" name="cust_password2" required className="input" placeholder="Repeat password*" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
                    <div className="password-show-button"></div>                    
                    <span className="bar"></span>
                </div>
                <button type="submit" className="button">Sign up</button>
            </div>
        </form>
    );
};

export default RegisterForm;
