import { useForm } from "react-hook-form";
import axios from "axios";
import "../Styles/register.css"
import { useNavigate } from "react-router-dom";
function Register(){
    const{register,handleSubmit}=useForm();
    const navigate=useNavigate();
    const registerUser=async(formData)=>{
        try{
            const response=await axios.post("http://localhost:8081/user/adduser",formData);
            console.log("user added successfully",response.formData)
            navigate("/Success")
        }catch(error){
            console.error("user adding failed",error);
        }
    }
    return(
        <div className="parent">
            <div className="child">
                <div className="subchild">
                <form onSubmit={handleSubmit(registerUser)}>
                    <h2>Register User</h2>
                <input className="inpt" type="text" placeholder="Enter your name" {...register("name")}/><br/>
                <input className="inpt" type="text" placeholder="Enter your username" {...register("userName")}/><br/>
                <input className="inpt" type="email" placeholder="Enter your email" {...register("email")}/><br/>
                <input className="inpt" type="text" placeholder="Enter your mobile" {...register("mobile")}/><br/>
                <input className="inpt" type="text" placeholder="Enter your address" {...register("address")}/><br/>
                <input className="inpt" type="password" placeholder="Enter your password" {...register("password")}/><br/>
                <input className="inpt" type="password" placeholder="Enter your password" {...register("confirmPassword")}/><br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
                </div>
            </div>
        </div>
    )
}

export default Register;