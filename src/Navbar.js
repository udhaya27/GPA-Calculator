import { Link,useLocation,useNavigate } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">
                <h1>GPA CALCULATOR</h1>
            {location.pathname === '/Home' && (
                <button type="button" className="submit" onClick={handleSubmit}>Back</button>
            )}
            
        </nav>
    );
}
 
export default Navbar;