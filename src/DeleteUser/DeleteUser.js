import "../Styles/deleteuser.css";
import { useEffect, useState } from "react";
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
    const DeleteUser=(id)=>{
        const filteredUser=users.filter(user=>user.userId !== id)
        setUpdateUser(filteredUser);
        console.log(updateUser)
    }
    return(
        <div className="Container">
            <div className="delete-style">
            <form>
                <h3>DeleteUser</h3><br/>
                <input type="number" placeholder="enter userid"/><br/>
                <button className="btn btn-danger" value={id} onChange={(e)=>setId(e.target.value)} onClick={()=>DeleteUser(id)}>DeleteUser</button>
            </form>
        </div>
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
    </tr>
  </thead>
  <tbody>
    {
        updateUser.map((updateuser,index)=>(
            <tr>
      <th scope="row">{updateuser.userId}</th>
      <td>{updateuser.name}</td>
      <td>{updateuser.userName}</td>
      <td>{updateuser.email}</td>
      <td>{updateuser.mobile}</td>
      <td>{updateuser.password}</td>
      <td>{updateuser.confirmPassword}</td>
      <td>{updateuser.address}</td>
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