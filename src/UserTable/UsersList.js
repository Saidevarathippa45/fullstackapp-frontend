import { useEffect, useState } from "react";



function UsersList(){

    const[users,setUsers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8081/user/getAllUsers")
        .then(res=>res.json())
        .then((result)=>{
            setUsers(result);
        })
    },[])
    return (

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
    </tr>
        ))
    }
  </tbody>
</table>
        </div>
    )
}
export default UsersList;