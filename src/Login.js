import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./usercontext";

const Login = () => {
    const[name,setName] = useState('');
    const {setUser} = useContext(UserContext);
    const[password,setPassword] = useState('');
    const[error,setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(name && password){
            navigate('/Home');
            setUser({name});
        }else{
            setError("Enter both the fields");
        }
    }

    return (
        <div className="login">
            <form onSubmit= {handleSubmit}>
                <fieldset>
                    <legend className="legend">Login</legend>
                    <label htmlFor="name" className="label">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                    <label htmlFor="password" className="label1">Password:</label>
                    <input type="password"  id="passqword" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="button">Submit</button>
                </fieldset>
            </form>
            
        </div>
    );
}
 
export default Login;