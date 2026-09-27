import { useNavigate } from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    return(
       
       <>
       /<h1>login page</h1>
          <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
       </>
    )
}
export default Login;