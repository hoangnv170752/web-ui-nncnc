import React ,{ useState } from 'react';
import './LoginForm.css';
function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler} className="form">
            <div className ="login">
                <h2 className= "header">
                    Trang Web Nông nghiệp công nghệ cao
                </h2>
                {(error != "") ? ( <div classname="error">{error}</div>) : ""}
                <div className ="input">
                    <label htmlFor="name"> <b>Name </b></label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className ="input">
                    <label htmlFor="email"> <b> Email </b> </label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}  />
                </div>
                <div className ="input">
                    <label htmlFor="password"><b>Password</b> </label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                </div>
                <input className = "button" type="submit" value="LOGIN" />
            </div>
        </form>
    );
}

export default LoginForm;
