import { useForm } from "react-hook-form";
import "../Styles/login.css"

function Login(){
    const{register,handleSubmit}=useForm();
    const registerUser=()=>{

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm one">
                <form onSubmit={handleSubmit(registerUser)}>
                    <h4>Login Here</h4>
                <input className="inpts" type="email" placeholder="Enter your email" {...register("name")}/><br/>
                <input className="inpts" type="password" placeholder="Enter your password" {...register("userName")}/><br/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
                </div>
            </div>
        </div>
    )
}
export default Login;