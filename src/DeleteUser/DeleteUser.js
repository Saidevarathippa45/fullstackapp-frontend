import "../Styles/deleteuser.css";
import { useEffect, useState } from "react";
import axios from "axios";
function DeleteUser(){

    const [users,setUsers]=useState([]);
    const [updateUser,setUpdateUser]=useState([]);
    const [id,setId]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8081/user/getAllUsers")
        .then(res=>res.json())
        .then((result)=>{
            setUsers(result);
            console.log(result)
        })
    },[])
    
        const DeleteUser=(userId)=>{
            axios.delete(`http://localhost:8081/user/delete/${userId}`)
            .then((response)=>{
                console.log(response.data)
                setUsers(response)
            })
        }
    
    return(
        <div className="Container">
            
        <div>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">UserId</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Password</th>
      <th scope="col">ConfirmPassword</th>
      <th scope="col">Address</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <th scope="row">{user.userId}</th>
      <td>{user.name}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.mobile}</td>
      <td>{user.password}</td>
      <td>{user.confirmPassword}</td>
      <td>{user.address}</td>
      <td><button className="btn btn-danger" value={id} onClick={()=>DeleteUser(user.userId)} >DeleteUser</button></td>
    </tr>
        ))
    }
  </tbody>
</table>
        </div>
        </div>
    )
}
export default DeleteUser;